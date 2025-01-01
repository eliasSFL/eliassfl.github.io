import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#234234] text-white p-2 md:p-4 text-center text-sm md:text-base gap-2">
      <p>Designed and built by Elias Chew</p>
      <p>Powered by React and Tailwind CSS</p>
      <a
        href="https://github.com/eliasSFL/portfolio"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-400 mt-2"
      >
        View Source Code
      </a>
      <p>&copy; 2025 Elias Chew. All Rights Reserved.</p>
    </footer>
  );
};
