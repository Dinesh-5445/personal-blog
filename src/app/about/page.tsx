export const metadata = {
  title: "About | Dinesh Palavalasa",
  description: "About the journey of learning in public.",
};

export default function AboutPage() {
  return (
    <div className="container prose">
      <div className="prose-header">
        <h1>About</h1>
      </div>
      
      <p>
        I am Dinesh Palavalasa, a student documenting an engineering journey in public. 
        My primary focus is on <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, and building a strong foundation in <strong>Systems Design</strong> and algorithms.
      </p>
      
      <p>
        This blog serves as an authentic archive. It doesn't hide the confusion, the repeated changes in direction, or the failures. Instead, it captures the gradual process of finding clarity through long-term consistency.
      </p>

      <p>
        The goal isn't to appear perfect. The goal is to show up every day.
      </p>
    </div>
  );
}
