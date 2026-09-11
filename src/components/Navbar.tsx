import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/" className="text-xl font-semibold">
        Dear Tomorrow
      </Link>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/create">Create</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </nav>
  );
}