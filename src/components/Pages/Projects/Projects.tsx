import React from "react";
import { Portfolio } from "./Portfolio";

export const Projects: React.FC = () => {
  return (
    <main className="m-5 px-4 max-w-5xl mx-auto flex flex-col">
      <header className="mb-3">
        <h1 className="text-5xl">Project Showcase</h1>
      </header>
      {/* Portfolio Website */}
      <Portfolio />
    </main>
  );
};
