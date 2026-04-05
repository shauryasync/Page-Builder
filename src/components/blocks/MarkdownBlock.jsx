import ReactMarkdown from "react-markdown";

function MarkdownBlock({ block, setBlocks }) {
  const handleChange = (e) => {
    const value = e.target.value;

    setBlocks((prev) =>
      prev.map((b) => (b.id === block.id ? { ...b, content: value } : b)),
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm space-y-4">
      <textarea
        placeholder="Write markdown..."
        value={block.content}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <div className="prose">
        <ReactMarkdown>{block.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownBlock;
