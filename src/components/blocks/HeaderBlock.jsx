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
    <div className="bg-white p-4 rounded shadow-sm space-y-2">
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
    </div>
  );
}
