import { describe, it, expect } from 'vitest';
import { getAllPosts, getPostBySlug, fetchAllPosts, fetchPostBySlug, samplePosts } from '../blog';

describe('blog utility module', () => {
  it('getAllPosts returns all sample posts with required properties', () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThan(0);
    for (const post of posts) {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.date).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(Array.isArray(post.tags)).toBe(true);
      expect(post.content).toBeTruthy();
    }
  });

  it('getPostBySlug finds existing posts and returns undefined for unknown slugs', () => {
    const firstPost = samplePosts[0];
    const found = getPostBySlug(firstPost.slug);
    expect(found).toBeDefined();
    expect(found?.title).toBe(firstPost.title);

    const missing = getPostBySlug('non-existent-article-slug-xyz');
    expect(missing).toBeUndefined();
  });

  it('fetchAllPosts falls back to local posts when sanity client is unconfigured or fails', async () => {
    const posts = await fetchAllPosts();
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0].slug).toBe(samplePosts[0].slug);
  });

  it('fetchPostBySlug falls back to local post when sanity client is unconfigured or fails', async () => {
    const firstPost = samplePosts[0];
    const post = await fetchPostBySlug(firstPost.slug);
    expect(post).toBeDefined();
    expect(post?.slug).toBe(firstPost.slug);

    const missing = await fetchPostBySlug('unknown-slug');
    expect(missing).toBeUndefined();
  });
});
