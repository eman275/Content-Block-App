import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-neutral-2 py-4 px-6 mt-12">
      <div className="max-w-5xl mx-auto text-center text-sm text-neutral-5">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
