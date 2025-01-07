import React from "react";
import { Portfolio } from "./Portfolio";
import { SettingsMenu } from "./SFLProjects/SettingsMenu";

export const openImageOnClick = (image: string) => window.open(image, "_blank");

export const Projects: React.FC = () => {
  return (
    <main className="m-5 px-4 max-w-5xl mx-auto flex flex-col">
      <header className="mb-3">
        <h1>Project Showcase</h1>
      </header>
      {/* Portfolio Website */}
      <Portfolio openImageOnClick={openImageOnClick} />
      <h2 className="mt-4">Sunflower Land Projects</h2>
      <p>Here are some of the contributions that I made for Sunflower Land</p>
      <SettingsMenu />
    </main>
  );
};
