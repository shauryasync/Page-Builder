function ImageBlock({ block, setBlocks }) {
  const handleChange = (e) => {
    const value = e.target.value;

    setBlocks((prev) =>
      prev.map((b) => (b.id === block.id ? { ...b, content: value } : b)),
    );
  };

  return (
    <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition">
      <input
        type="text"
        placeholder="Paste image URL..."
        value={block.content}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      {block.content && (
        <img src={block.content} alt="preview" className="w-full rounded" />
      )}
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

export default ImageBlock;
