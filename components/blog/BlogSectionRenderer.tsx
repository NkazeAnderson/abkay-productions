"use client";

import Image from "next/image";
import type { BlogSection } from "@/types/blog";

const HEADING_STYLES = [
  "text-3xl font-bold text-yellow-800",
  "text-2xl font-bold text-yellow-800",
  "text-xl font-semibold text-yellow-800",
];

type BlogSectionRendererProps = {
  section: BlogSection;
  depth?: number;
  onPreviewImage: (image: { src: string; alt: string }) => void;
};

export default function BlogSectionRenderer({
  section,
  depth = 0,
  onPreviewImage,
}: BlogSectionRendererProps) {
  const headingClass = HEADING_STYLES[Math.min(depth, HEADING_STYLES.length - 1)];
  const Wrapper = depth === 0 ? "section" : "div";

  return (
    <Wrapper
      className={
        depth === 0
          ? "px-6 md:px-14 py-8 space-y-4 max-w-3xl mx-auto"
          : "space-y-4 pt-4 md:pl-6 md:border-l md:border-primary/15"
      }
    >
      {section.heading && <h2 className={headingClass}>{section.heading}</h2>}

      {section.paragraphs?.map((paragraph, i) => (
        <p key={i} className="text-slate-600 leading-8">
          {paragraph}
        </p>
      ))}

      {section.media && section.media.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {section.media.map((item, i) => (
            <div
              key={`${section.id}-media-${i}`}
              className="space-y-1.5"
              style={
                section.media!.length === 1 ? { gridColumn: "1 / -1" } : undefined
              }
            >
              {item.type === "image" ? (
                <button
                  type="button"
                  onClick={() => onPreviewImage({ src: item.src, alt: item.alt })}
                  aria-label={`Preview ${item.alt}`}
                  className="group relative block h-56 md:h-64 w-full overflow-hidden rounded-2xl shadow-sm cursor-zoom-in"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width:767px) 92vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ) : (
                <video
                  className="h-56 md:h-64 w-full rounded-2xl object-cover shadow-sm"
                  src={item.src}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              )}
              {item.caption && (
                <p className="text-xs text-slate-500 text-center">{item.caption}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {section.sections && section.sections.length > 0 && (
        <div className="space-y-6 pt-2">
          {section.sections.map((sub) => (
            <BlogSectionRenderer
              key={sub.id}
              section={sub}
              depth={depth + 1}
              onPreviewImage={onPreviewImage}
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
}
