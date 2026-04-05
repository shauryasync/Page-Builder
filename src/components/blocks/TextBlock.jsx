function TextBlock({ block, setBlocks }) {
  const handleChange = (e) => {
    const value = e.target.value;

    setBlocks((prev) =>
      prev.map((b) => (b.id === block.id ? { ...b, content: value } : b)),
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <textarea
        className="w-full outline-none"
        placeholder="Write something..."
        value={block.content}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextBlock;
