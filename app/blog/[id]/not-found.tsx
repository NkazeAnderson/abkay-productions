import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center space-y-4 max-w-md">
        <p className="text-xs tracking-[0.4em] text-primary font-semibold uppercase">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">Post Not Found</h1>
        <p className="text-white/55 leading-7 text-sm">
          The blog post you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>
        <Button asChild className="mt-2">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    </div>
  );
}
