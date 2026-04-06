function ImageBlock({ block, setBlocks }) {
  const handleChange = (e) => {
    const value = e.target.value;

    setBlocks((prev) =>
      prev.map((b) => (b.id === block.id ? { ...b, content: value } : b)),
    );
  };

  return (
    <div
      className={`relative p-6 rounded-2xl transition-all duration-200
    ${
      block.isEditing
        ? "bg-white border-2 border-indigo-500 shadow-md"
        : "bg-white/80 border border-slate-200 hover:shadow-md"
    }`}
    >
      <button
        onClick={() => {
          if (window.confirm("Delete this block?")) {
            setBlocks((prev) => prev.filter((b) => b.id !== block.id));
          }
        }}
        className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition"
      >
        ✕
      </button>
      <input
        type="text"
        placeholder="Paste image URL..."
        value={block.content}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      {block.content && (
        <div className="w-full h-[300px] overflow-hidden rounded-xl">
          <img
            src={block.content}
            alt="preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default ImageBlock;
