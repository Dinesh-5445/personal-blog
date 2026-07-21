import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container">
      <p>© {new Date().getFullYear()} Dinesh Palavalasa.</p>
      <div className="flex gap-6">
        <a href="https://github.com/Dinesh-5445" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/dinesh-palavalasa-a53250389" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
