#!/usr/bin/env python3
"""
Remove near-white background from product images by flood-filling from edges.
Preserves internal highlights and light labels.
"""
import os
import sys
from PIL import Image

THRESHOLD = 238

def remove_white_bg(input_path: str, output_path: str):
    img = Image.open(input_path).convert("RGBA")
    w, h = img.size
    pixels = img.load()

    # Build a mask of "background" pixels connected to edges
    visited = [[False] * h for _ in range(w)]
    stack = []

    # Seed from all four edges
    for x in range(w):
        stack.append((x, 0))
        stack.append((x, h - 1))
    for y in range(1, h - 1):
        stack.append((0, y))
        stack.append((w - 1, y))

    while stack:
        x, y = stack.pop()
        if x < 0 or x >= w or y < 0 or y >= h:
            continue
        if visited[x][y]:
            continue
        r, g, b, a = pixels[x, y]
        if r > THRESHOLD and g > THRESHOLD and b > THRESHOLD and a > 0:
            visited[x][y] = True
            stack.append((x + 1, y))
            stack.append((x - 1, y))
            stack.append((x, y + 1))
            stack.append((x, y - 1))

    # First pass: mark background transparent
    for x in range(w):
        for y in range(h):
            if visited[x][y]:
                pixels[x, y] = (0, 0, 0, 0)

    # Second pass: 1px feather around transparent edges
    # Find pixels adjacent to transparent and slightly soften them
    for x in range(w):
        for y in range(h):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            # Check neighbors
            has_transparent_neighbor = False
            for dx, dy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                nx, ny = x + dx, y + dy
                if 0 <= nx < w and 0 <= ny < h:
                    if pixels[nx, ny][3] == 0:
                        has_transparent_neighbor = True
                        break
            if has_transparent_neighbor:
                # Slight darken to blend with black background
                pixels[x, y] = (max(0, r - 10), max(0, g - 10), max(0, b - 10), max(0, a - 15))

    img.save(output_path)
    print(f"Saved: {output_path}")

if __name__ == "__main__":
    base_dir = os.path.join(os.path.dirname(__file__), "..")
    products_dir = os.path.join(base_dir, "public", "images", "products")

    products = [
        ("product-01-bandage-needle.jpg", "product-01-bandage-needle-dark.png"),
        ("product-02-remodeling-needle.jpg", "product-02-remodeling-needle-dark.png"),
        ("product-03-wrinkle-eraser.jpg", "product-03-wrinkle-eraser-dark.png"),
        ("product-04-collagen-activator.jpg", "product-04-collagen-activator-dark.png"),
        ("product-05-hydration-complex.jpg", "product-05-hydration-complex-dark.png"),
    ]

    for src, dst in products:
        src_path = os.path.join(products_dir, src)
        dst_path = os.path.join(products_dir, dst)
        if os.path.exists(src_path):
            remove_white_bg(src_path, dst_path)
        else:
            print(f"Missing: {src_path}")
            sys.exit(1)

    print("All done.")
