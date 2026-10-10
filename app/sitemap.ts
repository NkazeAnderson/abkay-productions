import type { MetadataRoute } from "next";
import { BLOGS } from "@/lib/blogs";
import { SITE_URL } from "@/lib/seo";

const PAGES: {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/industries/music-production", priority: 0.9, changeFrequency: "weekly" },
  { path: "/industries/fast-food", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries/complex", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.9, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = PAGES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
  const posts = BLOGS.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.id}`,
    lastModified: new Date(blog.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));
  return [...pages, ...posts];
}
