function Sidebar() {
  return (
    <div className="w-64 h-[calc(100vh-56px)] bg-gray-100 border-r p-4 fixed top-14">
      <h2 className="text-sm font-semibold mb-4">Block Palette</h2>

      <div className="space-y-2">
        <button className="block w-full text-left p-2 bg-white rounded">
          Text Block
        </button>
        <button className="block w-full text-left p-2 bg-white rounded">
          Header Block
        </button>
        <button className="block w-full text-left p-2 bg-white rounded">
          Image Block
        </button>
        <button className="block w-full text-left p-2 bg-white rounded">
          Markdown Block
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
