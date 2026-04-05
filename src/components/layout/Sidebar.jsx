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
    <div className="w-64 h-[calc(100vh-56px)] bg-gray-100 border-r p-4 fixed top-14">
      <h2 className="text-sm font-semibold mb-4">Block Palette</h2>

      <div className="space-y-2">
        <button
          onClick={() => addBlock("text")}
          className="block w-full p-2 bg-white rounded"
        >
          Text Block
        </button>

        <button
          onClick={() => addBlock("header")}
          className="block w-full p-2 bg-white rounded"
        >
          Header Block
        </button>

        <button
          onClick={() => addBlock("image")}
          className="block w-full p-2 bg-white rounded"
        >
          Image Block
        </button>

        <button
          onClick={() => addBlock("markdown")}
          className="block w-full p-2 bg-white rounded"
        >
          Markdown Block
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
