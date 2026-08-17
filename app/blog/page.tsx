import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import { BLOGS } from "@/lib/blogs";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/*  Hero  */}
      <section className="relative pt-28 pb-16 px-6 md:px-[8%] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.12),transparent)] pointer-events-none" />
        <div className="relative max-w-3xl">
          <p className="text-xs tracking-[0.4em] text-primary font-semibold uppercase mb-4">
            Our Blog
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Stories &amp;
            <br />
            <span className="text-primary">Behind the Scenes</span>
          </h1>
          <div className="h-0.5 w-16 bg-primary mb-6" />
          <p className="text-white/65 text-lg leading-8 max-w-xl">
            Updates, insights, and a closer look at what happens across music
            production, the Complex, and our fast food branch.
          </p>
        </div>
      </section>

      {/*  Grid  */}
      <section className="py-8 px-6 md:px-[8%] border-t border-white/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {BLOGS.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="group flex flex-col rounded-2xl bg-white/3 border border-white/8 overflow-hidden hover:border-primary/40 hover:bg-white/5 transition-all duration-300"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width:639px) 92vw, (max-width:1023px) 45vw, 30vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                <span className="absolute top-3 left-3 text-[0.65rem] tracking-[0.25em] font-semibold uppercase text-black bg-primary px-2.5 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h2 className="font-semibold text-white text-lg leading-snug group-hover:text-primary transition-colors">
                  {blog.title}
                </h2>
                <p className="text-white/50 text-sm leading-6 flex-1">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/8 text-xs text-white/40">
                  <span>{formatDate(blog.date)}</span>
                  <span>{blog.readTime}</span>
                </div>
                <span className="flex items-center gap-1 text-primary text-xs font-semibold">
                  Read More <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter className="mt-16" />
    </div>
  );
}
