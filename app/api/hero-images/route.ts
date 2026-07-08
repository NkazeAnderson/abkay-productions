import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

const HERO_DIRECTORY = path.join(process.cwd(), "public", "hero");
const IMAGE_EXTENSIONS = new Set([
  ".avif",
  ".gif",
  ".jpg",
  ".jpeg",
  ".png",
  ".svg",
  ".webp",
]);

export async function GET() {
  try {
    const entries = await fs.readdir(HERO_DIRECTORY, { withFileTypes: true });

    const images = entries
      .filter((entry) => {
        if (!entry.isFile()) {
          return false;
        }

        const extension = path.extname(entry.name).toLowerCase();
        return IMAGE_EXTENSIONS.has(extension);
      })
      .map((entry) => `/hero/${encodeURIComponent(entry.name)}`)
      .sort((a, b) => a.localeCompare(b));

    return Response.json({ images });
  } catch {
    return Response.json({ images: [] });
  }
}
