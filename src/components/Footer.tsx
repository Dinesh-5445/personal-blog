import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container">
      <p>© {new Date().getFullYear()} Dinesh Palavalasa.</p>
      <div className="flex gap-6">
        <a href="https://github.com/Dinesh-Palavalasa" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
