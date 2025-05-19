import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-neutral-2 py-4 px-6 shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-secondary-1">Content Dashboard</h1>
        {/* <nav className="space-x-4 text-sm text-neutral-6">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Contact</a>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
