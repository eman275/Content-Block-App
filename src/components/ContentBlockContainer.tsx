import React, { useState } from "react";
import ContentBlock from "./ContentBlock";
import Footer from "./Footer";
import Header from "./Header";

const initialBlocks = [
  {
    id: 1,
    heading: "AI Block 1",
    summary: "This is a summary for block 1.",
    content: ["Paragraph 1", "Paragraph 2"],
    type: "paragraph",
  },
  {
    id: 2,
    heading: "AI Block 2",
    summary: "Summary for block 2 with bullets.",
    content: ["Bullet 1", "Bullet 2", "Bullet 3"],
    type: "bullets",
  },
];

const ContentBlockContainer: React.FC = () => {
  const [blocks, setBlocks] = useState(initialBlocks);

  const handleDuplicate = (index: number, newData: any) => {
    const newBlock = {
      ...newData,
      id: Date.now(),
      type: blocks[index].type,
    };
    const newBlocks = [...blocks];
    newBlocks.splice(index + 1, 0, newBlock);
    setBlocks(newBlocks);
  };

  const handleDelete = (index: number) => {
    const newBlocks = blocks.filter((_, i) => i !== index);
    setBlocks(newBlocks);
  };

  return (
    // <div className="space-y-6 py-10">
    //   {blocks.map((block, index) => (
    //     <ContentBlock
    //       key={block.id}
    //       heading={block.heading}
    //       summary={block.summary}
    //       content={block.content}
    //       type={block.type as "paragraph" | "bullets"}
    //      onDuplicate={(data) => handleDuplicate(index, data)}
    //       onDelete={() => handleDelete(index)}
    //     />
    //   ))}
    // </div>
    <div className="min-h-screen flex flex-col bg-neutral-0">
      <Header />
      <main className="flex-1 py-10 px-6 space-y-10">
        {blocks.map((block, index) => (
          <ContentBlock
            key={block.id}
            heading={block.heading}
            summary={block.summary}
            content={block.content}
            type={block.type as "paragraph" | "bullets"}
            onDuplicate={(data) => handleDuplicate(index, data)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default ContentBlockContainer;
