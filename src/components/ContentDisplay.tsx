import { motion } from "framer-motion";
import React from "react";


const ContentDisplay: React.FC<{ content: string[]; type: "paragraph" | "bullets" }> = ({
  content,
  type
}) => {
  if (type === "paragraph") {
    return (
      <div className="space-y-3">
        {content.map((item, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-neutral-6 text-sm leading-relaxed"
          >
            {item}
          </motion.p>
        ))}
      </div>
    );
  }

  return (
    <ul className="list-disc list-inside space-y-2 text-neutral-6 text-sm">
      {content.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
};
export default ContentDisplay;