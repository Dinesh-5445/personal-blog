import Link from "next/link";
import { getSortedBlogsData } from "@/lib/blogs";

export default function Home() {
  const blogs = getSortedBlogsData();

  return (
    <div className="container">
      <section className="mb-24 mt-12">
        <h1 style={{ fontSize: "3.2rem", fontWeight: 500, letterSpacing: "-0.04em", marginBottom: "1.5rem", lineHeight: 1.1 }}>
          Engineering<br/>Journey.
        </h1>
        <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)", maxWidth: "560px", lineHeight: 1.6, fontWeight: 400 }}>
          An archive documenting the slow evolution of a student into an engineer. 
          Focusing on Systems, AI/ML, and the quiet persistence required to find clarity.
        </p>
      </section>

      <section>
        <div className="flex flex-col gap-4">
          {/* Active Major Blog */}
          {blogs.map(blog => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="blog-card active-link">
              <div className="blog-meta">
                <span>{new Date(blog.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
                <span className="blog-status">{blog.status}</span>
              </div>
              <h3 className="blog-title">{blog.title}</h3>
            </Link>
          ))}

          {/* Placeholders */}
          <div className="blog-card disabled">
            <div className="blog-meta">
              <span>Upcoming</span>
              <span className="blog-status" style={{ border: "none" }}>Coming Soon</span>
            </div>
            <h3 className="blog-title">50 Days of Consistency</h3>
          </div>

          <div className="blog-card disabled">
            <div className="blog-meta">
              <span>Upcoming</span>
              <span className="blog-status" style={{ border: "none" }}>Coming Soon</span>
            </div>
            <h3 className="blog-title">100 Days of DSA</h3>
          </div>

          <div className="blog-card disabled">
            <div className="blog-meta">
              <span>Upcoming</span>
              <span className="blog-status" style={{ border: "none" }}>Coming Soon</span>
            </div>
            <h3 className="blog-title">My First ML Project</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
