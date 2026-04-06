import { v4 as uuidv4 } from "uuid";

function Sidebar({ setBlocks }) {
  const addBlock = (type) => {
    const newBlock = {
      id: uuidv4(),
      type,
      content: "",
    };

    setBlocks((prev) => [...prev, newBlock]);
  };

  return (
    <div className="w-64 h-[calc(100vh-56px)] bg-white/70 backdrop-blur-md border-r border-slate-200 p-4 fixed top-14 shadow-sm">
      <h2 className="text-sm font-semibold mb-4">Block Palette</h2>
      <div className="space-y-2">
        <button
          onClick={() => addBlock("text")}
          className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-indigo-50 transition text-slate-600"
        >
          Text Block
        </button>

        <button
          onClick={() => addBlock("header")}
          className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-indigo-50 transition text-slate-600"
        >
          Header Block
        </button>

        <button
          onClick={() => addBlock("image")}
          className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-indigo-50 transition text-slate-600"
        >
          Image Block
        </button>

        <button
          onClick={() => addBlock("markdown")}
          className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-indigo-50 transition text-slate-600"
        >
          Markdown Block
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
