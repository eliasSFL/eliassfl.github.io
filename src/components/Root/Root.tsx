import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useIsDarkMode } from "../../utils/darkMode";

export const Root: React.FC = () => {
  const { isDarkMode } = useIsDarkMode();
  return (
    <div
      className={`flex flex-col min-h-screen ${isDarkMode ? "bg-[#3d3b3a] text-white" : "bg-white text-black"}`}
    >
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
