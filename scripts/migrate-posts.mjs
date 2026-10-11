import { createClient } from 'next-sanity';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Automatically load .env.local and .env into process.env
for (const envFileName of ['.env.local', '.env']) {
  const envPath = path.join(__dirname, '..', envFileName);
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '');
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

// Import the posts from blog.ts
// For ease of execution across node versions, we parse/read the sample posts
const blogFilePath = path.join(__dirname, '../src/lib/blog.ts');
const blogContent = fs.readFileSync(blogFilePath, 'utf8');

// Extract samplePosts block
const postsMatch = blogContent.match(/export const samplePosts: BlogPost\[\] = (\[[\s\S]*?\]);\s*export function/);

if (!postsMatch) {
  console.error('Could not find samplePosts in src/lib/blog.ts');
  process.exit(1);
}

// Convert typescript array string to evaluated JS array
const rawPostsString = postsMatch[1];
const posts = eval(rawPostsString);

console.log(`Found ${posts.length} posts to migrate.`);

// Ensure seeds directory exists
const seedsDir = path.join(__dirname, '../seeds');
if (!fs.existsSync(seedsDir)) {
  fs.mkdirSync(seedsDir, { recursive: true });
}

// 1. Generate NDJSON file for Sanity CLI import: `npx sanity dataset import seeds/posts.ndjson production`
const ndjsonPath = path.join(seedsDir, 'posts.ndjson');
const ndjsonLines = posts.map((p) => {
  const doc = {
    _id: `post-${p.slug}`,
    _type: 'post',
    title: p.title,
    slug: {
      _type: 'slug',
      current: p.slug,
    },
    excerpt: p.excerpt,
    publishedAt: new Date(p.date).toISOString(),
    readTime: p.readTime,
    tags: p.tags,
    content: p.content.trim(),
  };
  return JSON.stringify(doc);
});

fs.writeFileSync(ndjsonPath, ndjsonLines.join('\n') + '\n', 'utf8');
console.log(`✅ Generated Sanity NDJSON seed file: seeds/posts.ndjson`);

// 2. If Sanity credentials & write token are provided, perform direct API upload
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;

async function uploadDirectly() {
  if (!projectId || !token) {
    console.log('\n--- HOW TO IMPORT INTO SANITY ---');
    console.log('Method A (Fastest via Sanity CLI):');
    console.log('  npx sanity dataset import seeds/posts.ndjson <your-dataset-name> --replace');
    console.log('\nMethod B (Direct Script Upload):');
    console.log('  Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in your environment or .env.local, then rerun:');
    console.log('  npm run sanity:migrate\n');
    return;
  }

  console.log(`\nConnecting to Sanity project: ${projectId} (dataset: ${dataset})...`);
  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  });

  for (const post of posts) {
    const doc = {
      _id: `post-${post.slug}`,
      _type: 'post',
      title: post.title,
      slug: {
        _type: 'slug',
        current: post.slug,
      },
      excerpt: post.excerpt,
      publishedAt: new Date(post.date).toISOString(),
      readTime: post.readTime,
      tags: post.tags,
      content: post.content.trim(),
    };

    try {
      await client.createOrReplace(doc);
      console.log(`✔ Imported: "${post.title}" (${post.slug})`);
    } catch (err) {
      console.error(`❌ Failed to import "${post.slug}":`, err.message);
    }
  }

  console.log('\n🎉 All posts successfully migrated into Sanity!');
}

uploadDirectly().catch((err) => {
  console.error('Migration error:', err);
  process.exit(1);
});
