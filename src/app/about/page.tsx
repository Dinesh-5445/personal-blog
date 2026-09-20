export const metadata = {
  title: "About | Dinesh Palavalasa",
  description: "Third-year engineering student building production-quality AI and systems projects.",
};

export default function About() {
  return (
    <div className="prose">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '3rem' }}>
        <img 
          src="/images/profile.png" 
          alt="Dinesh Palavalasa" 
          className="profile-img"
        />
        <div style={{ lineHeight: '1.4' }}>
          <h1 style={{ marginBottom: '0.5rem', marginTop: 0 }}>Dinesh Palavalasa</h1>
          <div style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '1.05em' }}>
            Third-year B.Tech student —<br />Metallurgical and Materials Engineering
          </div>
          <div style={{ fontSize: '0.95em', opacity: 0.8 }}>
            AI/ML · RL/MARL · NLP/RAG · Systems
          </div>
        </div>
      </div>

      <h2>ABOUT</h2>
      <p>
        I enjoy exploring Machine Learning and AI, with a focus on Deep Learning, Reinforcement Learning, Agentic AI, NLP, RAG, and Computer Vision. As an engineering student, I prefer learning by building practical applications rather than just reading theory.
      </p>

      <p>
        I like turning ideas into working systems, experimenting with different approaches, and taking the time to understand exactly why a model or architecture works, not just how to use it. This technical blog exists to document those experiments, the debugging processes, and the engineering lessons learned along the way.
      </p>

      <h2>CURRENT WORK</h2>
      <p>
        My recent work centers on intelligent systems and orchestrations. I have been developing Agentic AI orchestration pipelines (like Nexus Flow), applying multi-agent reinforcement learning to solve adaptive traffic optimization challenges, and building modular NLP/RAG architectures for automated support triage.
      </p>
    </div>
  );
}
