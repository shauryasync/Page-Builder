function TextBlock({ block, setBlocks }) {
  const handleChange = (e) => {
    const value = e.target.value;

    setBlocks((prev) =>
      prev.map((b) => (b.id === block.id ? { ...b, content: value } : b)),
    );
  };

  return (
    <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition">
      <textarea
        className="w-full outline-none"
        placeholder="Write something..."
        value={block.content}
        onChange={handleChange}
      />
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

export default TextBlock;
