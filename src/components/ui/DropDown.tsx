import { AnimatePresence, motion } from "framer-motion";
import React from "react";



const ACTION_STYLES = {
  Edit: { color: 'text-blue-600', icon: 'edit' },
  Duplicate: { color: 'text-green-600', icon: 'content_copy' },
  Delete: { color: 'text-red-600', icon: 'delete' },
} as const;

const DropdownMenu: React.FC<{
  isOpen: boolean;
  onSelect: (action: string) => void;
  onClose: () => void;
}> = ({ isOpen, onSelect, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute right-0 mt-2 w-36 bg-white border border-neutral-2 rounded-md shadow z-20 overflow-hidden"
          onClick={onClose}
        >
          {["Edit", "Duplicate", "Delete"].map((option) => {
            const style = ACTION_STYLES[option as keyof typeof ACTION_STYLES];
            return (
              <li
                key={option}
                className={`px-4 py-2 hover:bg-neutral-1 cursor-pointer text-sm flex items-center ${style.color}`}
                onClick={() => onSelect(option)}
              >
                <span className="material-icons text-sm mr-2">{style.icon}</span>
                <span>{option}</span>
              </li>
            );
          })}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;