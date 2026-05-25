import { getSortedBlogsData } from "@/lib/blogs";
import Link from "next/link";

export const metadata = {
  title: "Blogs | Dinesh Palavalasa",
  description: "A complete archive of long-form engineering blogs.",
};

export default function BlogsPage() {
  const blogs = getSortedBlogsData();

  return (
    <div className="container">
      <div className="mt-8 mb-12">
        <h1 style={{ fontSize: "2.5rem", letterSpacing: "-0.03em" }}>All Articles</h1>
      </div>

      <div className="flex flex-col">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="blog-card active-link">
            <div className="blog-meta">
              <span>{new Date(blog.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
              <span className="blog-status">{blog.status}</span>
            </div>
            <h3 className="blog-title">{blog.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
