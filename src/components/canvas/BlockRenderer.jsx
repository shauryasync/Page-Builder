import TextBlock from "../blocks/TextBlock";
import HeaderBlock from "../blocks/HeaderBlock";
import ImageBlock from "../blocks/ImageBlock";
import MarkdownBlock from "../blocks/MarkdownBlock";

function BlockRenderer({ block, setBlocks }) {
  switch (block.type) {
    case "text":
      return <TextBlock block={block} setBlocks={setBlocks} />;

    case "header":
      return <HeaderBlock block={block} setBlocks={setBlocks} />;

    case "image":
      return <ImageBlock block={block} setBlocks={setBlocks} />;

    case "markdown":
      return <MarkdownBlock block={block} setBlocks={setBlocks} />;

    default:
      return null;
  }
}

export default BlockRenderer;
