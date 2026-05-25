import { getBlogData, getSortedBlogsData } from "@/lib/blogs";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const blogs = getSortedBlogsData();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = getBlogData(resolvedParams.slug);
  if (!blog) {
    return { title: 'Article Not Found' };
  }
  return {
    title: `${blog.title} | Dinesh Palavalasa`,
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = getBlogData(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="prose">
      <header className="prose-header">
        <div className="flex items-center gap-4 mb-6">
          <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
            {new Date(blog.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
        </div>
        <h1>{blog.title}</h1>
      </header>

      <div className="mt-12 mb-16">
        <MDXRemote source={blog.content} />
      </div>
    </article>
  );
}
