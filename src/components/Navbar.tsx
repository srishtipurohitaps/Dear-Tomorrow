export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <h1 className="text-xl font-bold">
        Dear Tomorrow
      </h1>

      <div className="flex gap-6">
        <span>Home</span>
        <span>Create</span>
        <span>Gallery</span>
      </div>
    </nav>
  );
}