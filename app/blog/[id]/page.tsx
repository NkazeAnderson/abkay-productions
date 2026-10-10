import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/components/blog/BlogPostView";
import { BLOGS, getBlogById } from "@/lib/blogs";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ id: string }>;
};

// Pre-render every blog post at build time instead of on request.
export function generateStaticParams() {
  return BLOGS.map((blog) => ({ id: blog.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) return {};
  return buildMetadata({
    title: blog.title,
    description: blog.description,
    path: `/blog/${blog.id}`,
    image: blog.image,
    type: "article",
    publishedTime: blog.date,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: `${SITE_URL}${blog.image}`,
    datePublished: blog.date,
    dateModified: blog.date,
    author: { "@type": "Organization", name: blog.author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${blog.id}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostView blog={blog} />
    </>
  );
}
