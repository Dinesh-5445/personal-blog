import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="container">
      <Link href="/" className="nav-brand">
        Dinesh
      </Link>
      <div className="nav-links" style={{ alignItems: "center" }}>
        <Link href="/blogs">Archive</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <div style={{ marginLeft: "1rem" }}>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
