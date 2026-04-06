import ReactMarkdown from "react-markdown";

function MarkdownBlock({ block, setBlocks }) {
  const handleChange = (e) => {
    const value = e.target.value;

    setBlocks((prev) =>
      prev.map((b) => (b.id === block.id ? { ...b, content: value } : b)),
    );
  };

  return (
    <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition">
      <textarea
        placeholder="Write markdown..."
        value={block.content}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <div className="prose">
        <ReactMarkdown>{block.content}</ReactMarkdown>
        <button
          onClick={() =>
            setBlocks((prev) => prev.filter((b) => b.id !== block.id))
          }
          className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default MarkdownBlock;
