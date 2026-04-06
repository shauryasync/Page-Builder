function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-white/80 backdrop-blur border-b flex items-center justify-between px-6 z-50">
      <h1 className="font-bold text-lg">Page Builder</h1>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
        Publish
      </button>
    </div>
  );
}

export default Navbar;
