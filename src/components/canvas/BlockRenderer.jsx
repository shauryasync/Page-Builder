import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import TextBlock from "../blocks/TextBlock";
import HeaderBlock from "../blocks/HeaderBlock";
import ImageBlock from "../blocks/ImageBlock";
import MarkdownBlock from "../blocks/MarkdownBlock";

function BlockRenderer({ block, setBlocks }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  let Component;

  switch (block.type) {
    case "text":
      Component = TextBlock;
      break;
    case "header":
      Component = HeaderBlock;
      break;
    case "image":
      Component = ImageBlock;
      break;
    case "markdown":
      Component = MarkdownBlock;
      break;
    default:
      return null;
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="transition-all duration-200 hover:scale-[1.01]"
    >
      {/* Drag Handle */}
      <div
        {...listeners}
        className="cursor-grab text-slate-400 mb-1 hover:text-indigo-500 transition"
      >
        ⋮⋮
      </div>

      <Component block={block} setBlocks={setBlocks} />
    </div>
  );
}

export default BlockRenderer;
