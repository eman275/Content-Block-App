import { motion } from "framer-motion";
import { MoreVertical } from "lucide-react";
import React, { useState } from "react";
import ContentDisplay from "./ContentDisplay";
import EditForm from "./EditForm";
import { Button } from "./ui/button";
import DropdownMenu from "./ui/DropDown";

interface ContentBlockProps {
  heading: string;
  summary: string;
  content: string[];
  type: "paragraph" | "bullets";
  actions?: { label: string; onClick: () => void }[];
    onDuplicate?: (data: ContentBlockProps) => void; // 👈 added
  onDelete?: () => void; 
}

const sampleRegeneratedContents = [
  ["AI-generated insight paragraph 1.", "Insight paragraph 2."],
  ["Key bullet point A", "Key bullet point B", "Key bullet point C"],
  ["Updated text block one.", "Updated text block two."]
];

// --- Dropdown menu ---
// const DropdownMenu: React.FC<{
//   isOpen: boolean;
//   onSelect: (action: string) => void;
//   onClose: () => void;
// }> = ({ isOpen, onSelect, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.ul
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           className="absolute right-0 mt-2 w-36 bg-white border border-neutral-2 rounded-md shadow z-20 overflow-hidden"
//           onClick={onClose}
//         >
//           {["Edit", "Duplicate", "Delete"].map((option) => (
//             <li
//               key={option}
//               className="px-4 py-2 hover:bg-neutral-1 cursor-pointer text-sm text-neutral-6"
//               onClick={() => onSelect(option)}
//             >
//               {option}
//             </li>
//           ))}
//         </motion.ul>
//       )}
//     </AnimatePresence>
//   );
// };

// --- Edit Form ---
// const EditForm: React.FC<{
//   heading: string;
//   summary: string;
//   content: string;
//   onChangeHeading: (val: string) => void;
//   onChangeSummary: (val: string) => void;
//   onChangeContent: (val: string) => void;
//   onSave: () => void;
//   onCancel: () => void;
  
// }> = ({
//   heading,
//   summary,
//   content,
//   onChangeHeading,
//   onChangeSummary,
//   onChangeContent,
//   onSave,
//   onCancel , 

// }) => (
//   <div className="space-y-4">
//     <input
//       type="text"
//       className="w-full p-2 border border-neutral-2 rounded-md text-base"
//       value={heading}
//       onChange={(e) => onChangeHeading(e.target.value)}
//     />
//     <textarea
//       className="w-full p-2 border border-neutral-2 rounded-md text-sm"
//       rows={2}
//       value={summary}
//       onChange={(e) => onChangeSummary(e.target.value)}
//     />
//     <textarea
//       className="w-full p-2 border border-neutral-2 rounded-md text-sm"
//       rows={4}
//       value={content}
//       onChange={(e) => onChangeContent(e.target.value)}
//     />
//     <div className="flex gap-3">
//       <Button onClick={onSave}>Save</Button>
//       <Button variant="outline" onClick={onCancel}>
//         Cancel
//       </Button>
//     </div>
//   </div>
// );

// --- Content Display ---
// const ContentDisplay: React.FC<{ content: string[]; type: "paragraph" | "bullets" }> = ({
//   content,
//   type
// }) => {
//   if (type === "paragraph") {
//     return (
//       <div className="space-y-3">
//         {content.map((item, index) => (
//           <motion.p
//             key={index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: index * 0.1 }}
//             className="text-neutral-6 text-sm leading-relaxed"
//           >
//             {item}
//           </motion.p>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <ul className="list-disc list-inside space-y-2 text-neutral-6 text-sm">
//       {content.map((item, index) => (
//         <motion.li
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: index * 0.1 }}
//         >
//           {item}
//         </motion.li>
//       ))}
//     </ul>
//   );
// };

// --- Main Component ---
const ContentBlock: React.FC<ContentBlockProps> = ({
  heading,
  summary,
  content,
  type,
  actions = [],
  onDuplicate,
  onDelete,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dynamicContent, setDynamicContent] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  const [editedHeading, setEditedHeading] = useState(heading);
  const [editedSummary, setEditedSummary] = useState(summary);
  const [editedContent, setEditedContent] = useState(content.join("\n"));

  const handleRegenerate = () => {
    const random = Math.floor(Math.random() * sampleRegeneratedContents.length);
    setDynamicContent(sampleRegeneratedContents[random]);
  };

const handleMenuClick = (action: string) => {
  setShowDropdown(false);
  switch (action) {
    case "Edit":
      setIsEditing(true);
      break;
    case "Duplicate":
      onDuplicate?.({
        heading: editedHeading,
        summary: editedSummary,
        content: dynamicContent,
        type,
      });
      break;
    case "Delete":
      onDelete?.();
      break;
  }
};


  const handleSaveEdit = () => {
    setIsEditing(false);
    setDynamicContent(editedContent.split("\n"));
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedHeading(heading);
    setEditedSummary(summary);
    setEditedContent(content.join("\n"));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="bg-neutral-1 rounded-2xl shadow-lg p-6 relative w-full max-w-3xl mx-auto space-y-5 hover:shadow-xl transition-all border border-neutral-2"
    >
      {/* Dropdown Trigger */}
      <div className="absolute top-4 right-4 text-neutral-5">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="p-1 rounded-full hover:bg-neutral-2 transition"
        >
          <MoreVertical className="w-5 h-5" />
        </button>
        <DropdownMenu
          isOpen={showDropdown}
          onSelect={handleMenuClick}
          onClose={() => setShowDropdown(false)}
        />
      </div>

      {isEditing ? (
        <EditForm
          heading={editedHeading}
          summary={editedSummary}
          content={editedContent}
          onChangeHeading={setEditedHeading}
          onChangeSummary={setEditedSummary}
          onChangeContent={setEditedContent}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          {/* Heading */}
          <h2 className="text-huge font-semibold text-primary-1 leading-snug">
            {editedHeading}
          </h2>

          {/* Summary */}
          <p className="text-secondary-1 text-base leading-relaxed">
            {editedSummary}
          </p>

          {/* Main Content */}
          <ContentDisplay content={dynamicContent} type={type} />

          {/* Custom Actions */}
          {actions.length > 0 && (
            <div className="pt-4 flex flex-wrap gap-3">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  className="transition hover:brightness-110"
                  onClick={action.onClick}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}

          {/* Regenerate */}
          <div className="pt-4">
            <Button
              variant="outline"
              onClick={handleRegenerate}
              className="hover:bg-neutral-2 transition bg-primary-3 text-base-white"
            >
              Regenerate
            </Button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ContentBlock;
