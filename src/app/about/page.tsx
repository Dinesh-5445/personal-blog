export const metadata = {
  title: "About | Dinesh Palavalasa",
  description: "Third-year engineering student building production-quality AI and systems projects.",
};

export default function AboutPage() {
  return (
    <div className="container prose">
      <div className="prose-header">
        <h1>About</h1>
      </div>

      <p>
        I am Dinesh Palavalasa, a third-year engineering student with a focused interest in{" "}
        <strong>Artificial Intelligence</strong>, <strong>Reinforcement Learning</strong>,{" "}
        <strong>Multi-Agent Systems</strong>, <strong>Computer Vision</strong>, and{" "}
        <strong>Distributed Systems</strong>.
      </p>

      <p>
        My approach to engineering is deliberate. I prefer building systems I fully understand
        over assembling quick demos from tutorials. Most of the projects I work on start from
        the fundamentals—reading papers, studying implementations, and building upward from
        there.
      </p>

      <p>
        This blog is a technical archive of that process. It documents the architecture
        decisions, engineering trade-offs, and lessons learned across projects that range from
        RL-based traffic optimization to production AI pipelines. I also contribute to open
        source where I can, and I try to write clearly about what I build.
      </p>

      <p>
        I am always open to collaborating on open-source projects, research ideas, and
        engineering discussions.
      </p>
    </div>
  );
}
