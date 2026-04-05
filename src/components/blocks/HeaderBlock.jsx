function HeaderBlock({ block, setBlocks }) {
  const handleTextChange = (e) => {
    const value = e.target.value;

    setBlocks((prev) =>
      prev.map((b) => (b.id === block.id ? { ...b, content: value } : b)),
    );
  };

  const handleLevelChange = (e) => {
    const level = e.target.value;

    setBlocks((prev) =>
      prev.map((b) => (b.id === block.id ? { ...b, level } : b)),
    );
  };

  const Tag = block.level || "h2";

  return (
    <div className="bg-white p-4 rounded shadow-sm space-y-2">
      <select
        value={block.level || "h2"}
        onChange={handleLevelChange}
        className="border p-1 rounded"
      >
        <option value="h1">H1</option>
        <option value="h2">H2</option>
        <option value="h3">H3</option>
      </select>

      <input
        type="text"
        placeholder="Enter heading..."
        value={block.content}
        onChange={handleTextChange}
        className="w-full outline-none font-bold"
      />

      <Tag>{block.content || "Preview heading..."}</Tag>
    </div>
  );
}

export default HeaderBlock;
