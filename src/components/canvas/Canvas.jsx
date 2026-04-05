import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import BlockRenderer from "./BlockRenderer";

function Canvas({ blocks, setBlocks }) {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = blocks.findIndex((b) => b.id === active.id);
      const newIndex = blocks.findIndex((b) => b.id === over.id);

      setBlocks(arrayMove(blocks, oldIndex, newIndex));
    }
  };

  return (
    <div className="ml-64 flex-1 p-10">
      <div className="max-w-3xl mx-auto space-y-6">
        {blocks.length === 0 && (
          <div className="border-2 border-dashed p-10 text-center rounded-lg text-gray-500">
            Start building your page...
          </div>
        )}

        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={blocks.map((b) => b.id)}
            strategy={verticalListSortingStrategy}
          >
            {blocks.map((block) => (
              <BlockRenderer
                key={block.id}
                block={block}
                setBlocks={setBlocks}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default Canvas;
