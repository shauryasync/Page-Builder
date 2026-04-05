function ImageBlock({ block, setBlocks }) {
  const handleChange = (e) => {
    const value = e.target.value;

    setBlocks((prev) =>
      prev.map((b) => (b.id === block.id ? { ...b, content: value } : b)),
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm space-y-2">
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
    </div>
  );
}

export default ImageBlock;
