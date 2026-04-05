import BlockRenderer from "./BlockRenderer";

function Canvas({ blocks, setBlocks }) {
  return (
    <div className="ml-64 flex-1 p-10">
      <div className="max-w-3xl mx-auto space-y-6">
        {blocks.length === 0 && (
          <div className="border-2 border-dashed p-10 text-center rounded-lg text-gray-500">
            Start building your page...
          </div>
        )}

        {blocks.map((block) => (
          <BlockRenderer key={block.id} block={block} setBlocks={setBlocks} />
        ))}
      </div>
    </div>
  );
}

export default Canvas;
