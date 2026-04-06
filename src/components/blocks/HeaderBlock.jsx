export default function HeaderBlock({ block, setBlocks }) {
  const toggleEdit = () => {
    setBlocks((prev) =>
      prev.map((b) =>
        b.id === block.id ? { ...b, isEditing: !b.isEditing } : b,
      ),
    );
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setBlocks((prev) =>
      prev.map((b) => (b.id === block.id ? { ...b, content: value } : b)),
    );
  };

  const Tag = block.level || "h2";

  return (
    <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition">
      {block.isEditing ? (
        <>
          <input
            value={block.content}
            onChange={handleChange}
            placeholder="Enter heading..."
            className="w-full border p-2 rounded"
          />
          <button onClick={toggleEdit} className="text-sm text-blue-500">
            Done
          </button>
        </>
      ) : (
        <div onClick={toggleEdit}>
          <Tag>{block.content || "Click to edit heading"}</Tag>
        </div>
      )}
      <Tag className="text-2xl font-bold text-slate-800">
        {block.content || "Heading"}
      </Tag>
      <button
        onClick={() =>
          setBlocks((prev) => prev.filter((b) => b.id !== block.id))
        }
        className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition"
      >
        ✕
      </button>
    </div>
  );
}
