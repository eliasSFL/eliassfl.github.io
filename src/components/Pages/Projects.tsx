import React from "react";

export const Projects: React.FC = () => {
  return (
    <main className="m-0 px-4 max-w-5xl mx-auto flex flex-col">
      {/* Portfolio Website */}
      <section id="website">
        <article>
          <h1 className="text-4xl">Portfolio Website</h1>
          <p>
            This portfolio site is coded by me using React, Typescript and
            Tailwind CSS
          </p>
        </article>
      </section>
    </main>
  );
};
