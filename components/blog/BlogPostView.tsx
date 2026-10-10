"use client";

import { useState } from "react";
import { CalendarDays, Clock, User } from "lucide-react";
import IndustryPageLayout from "@/components/pages/IndustryPageLayout";
import BlogSectionRenderer from "@/components/blog/BlogSectionRenderer";
import ImageLightbox from "@/components/ui/image-lightbox";
import type { Blog } from "@/types/blog";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPostView({ blog }: { blog: Blog }) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <IndustryPageLayout
      title={blog.title}
      imageSrc={blog.image}
      imageAlt={blog.title}
      sidebarLabel="Blog"
      backHref="/blog"
      backLabel="Back to Blog"
    >
      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10 space-y-4 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
          {blog.category}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 leading-tight">
          {blog.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <User size={13} />
            {blog.author}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays size={13} />
            {formatDate(blog.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {blog.readTime}
          </span>
        </div>
        <p className="text-slate-600 leading-8 text-lg">{blog.description}</p>
      </section>

      {/* ── Recursive content sections ─────────────────────────────── */}
      {blog.sections.map((section) => (
        <BlogSectionRenderer
          key={section.id}
          section={section}
          onPreviewImage={setActiveImage}
        />
      ))}

      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </IndustryPageLayout>
  );
}
