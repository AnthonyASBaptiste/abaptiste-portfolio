import os
from PIL import Image, ImageDraw

def generate_favicons():
    # Target directory
    target_dir = r"C:\Users\CBCGaming\Documents\Projects\portfolio-2026\src\app"
    public_dir = r"C:\Users\CBCGaming\Documents\Projects\portfolio-2026\public"
    os.makedirs(target_dir, exist_ok=True)
    os.makedirs(public_dir, exist_ok=True)

    # Colors
    bg_color = (7, 9, 14)       # #07090e near black
    neon_green = (16, 185, 129) # #10B981 emerald green
    line_width = 30             # Bold enough to be visible when downscaled

    # 1. Create high-resolution base image (512x512)
    img = Image.new("RGBA", (512, 512), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Draw rounded background card
    # Card padding to look like a rounded app icon
    draw.rounded_rectangle([(24, 24), (488, 488)], radius=96, fill=bg_color)

    # Draw 'a'
    # loop ellipse: (60, 230) to (150, 350)
    # stem line: (150, 210) to (150, 350)
    draw.ellipse([(65, 235), (145, 345)], outline=neon_green, width=line_width)
    draw.line([(150, 210), (150, 350)], fill=neon_green, width=line_width)

    # Draw 'b'
    # loop ellipse: (180, 230) to (270, 350)
    # stem line: (180, 140) to (180, 350)
    draw.ellipse([(185, 235), (265, 345)], outline=neon_green, width=line_width)
    draw.line([(180, 140), (180, 350)], fill=neon_green, width=line_width)

    # Draw '>'
    # arrow top: (300, 210) -> (360, 270)
    # arrow bottom: (360, 270) -> (300, 330)
    draw.line([(300, 210), (360, 270)], fill=neon_green, width=line_width, joint="round")
    draw.line([(360, 270), (300, 330)], fill=neon_green, width=line_width, joint="round")

    # Draw '_'
    # horizontal cursor: (390, 335) to (450, 335)
    draw.line([(390, 335), (450, 335)], fill=neon_green, width=line_width)

    # Save PNG outputs
    # 180x180 for apple-touch-icon
    apple_icon = img.resize((180, 180), Resampling.LANCZOS if hasattr(Image, 'Resampling') else Image.ANTIALIAS)
    apple_icon.save(os.path.join(target_dir, "apple-icon.png"), "PNG")
    apple_icon.save(os.path.join(public_dir, "apple-touch-icon.png"), "PNG")

    # 32x32 for standard icon
    icon_32 = img.resize((32, 32), Resampling.LANCZOS if hasattr(Image, 'Resampling') else Image.ANTIALIAS)
    icon_32.save(os.path.join(target_dir, "icon.png"), "PNG")
    icon_32.save(os.path.join(public_dir, "icon-32x32.png"), "PNG")

    # Save multi-resolution ICO
    ico_sizes = [16, 32, 48]
    ico_imgs = []
    for size in ico_sizes:
        ico_imgs.append(img.resize((size, size), Resampling.LANCZOS if hasattr(Image, 'Resampling') else Image.ANTIALIAS))
    
    # Save as favicon.ico
    ico_imgs[1].save(
        os.path.join(target_dir, "favicon.ico"),
        format="ICO",
        sizes=[(size, size) for size in ico_sizes],
        append_images=ico_imgs
    )
    ico_imgs[1].save(
        os.path.join(public_dir, "favicon.ico"),
        format="ICO",
        sizes=[(size, size) for size in ico_sizes],
        append_images=ico_imgs
    )

    print("Favicons successfully generated!")

if __name__ == "__main__":
    # PIL image resizing compatibility
    try:
        from PIL.Image import Resampling
    except ImportError:
        pass
    generate_favicons()
