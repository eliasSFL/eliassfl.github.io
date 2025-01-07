import React from "react";
import SwitchToggle from "../Switch/Switch";
import { useIsDarkMode } from "../../utils/darkMode";

export const Footer: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useIsDarkMode();

  return (
    <footer className="flex flex-col-reverse bg-[#234234] text-white p-2 md:p-4 text-center text-sm md:text-base relative">
      <div className="mt-2 md:mt-0 md:absolute md:bottom-4 md:left-4">
        <SwitchToggle
          toggleEnabled={"Dark Mode"}
          toggleDisabled={"Light Mode"}
          isToggled={isDarkMode}
          toggleEffect={toggleDarkMode}
        />
      </div>
      <div>
        <p>Designed and built by Elias Chew</p>
        <p>Powered by React, TypeScript and Tailwind CSS</p>
        <a
          href="https://github.com/eliasSFL/portfolio"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 mt-2"
        >
          View Source Code
        </a>
        <p>&copy; 2025 Elias Chew. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
