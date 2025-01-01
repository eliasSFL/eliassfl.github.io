import React from "react";

export const About: React.FC = () => {
  return (
    <main className="m-0 px-4 max-w-5xl mx-auto flex flex-col">
      <section>
        {/* Text container */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="mr-4">
            <h2>About Me</h2>
            <p>
              Hi! I'm Elias, a software engineer based in Singapore. I enjoy
              creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </p>
            <p></p>
          </div>
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGDJRqJdBg2WQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720013407415?e=1741219200&v=beta&t=BaylGWJfRuAOteyM68mhGIsN63ki24vErAJhF-LeqTY"
            alt="Elias"
            className="rounded-3xl w-32 h-32 md:w-40 md:h-40 mt-4"
          />
        </div>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <div id="skills-container">
          <i className="fab fa-html5"></i>
          <i className="fab fa-css3-alt"></i>
          <i className="fab fa-js"></i>
          <i className="fab fa-react"></i>
          <i className="fab fa-aws"></i>
          <i className="fab fa-sketch"></i>
          <i className="fab fa-figma"></i>
          <i className="fab fa-git"></i>
          <i className="fab fa-chrome"></i>
          <i className="fas fa-terminal"></i>
          <i className="fas fa-universal-access"></i>
          <i className="fab fa-npm"></i>
          <i className="fab fa-node"></i>
          <i className="fab fa-github"></i>
        </div>
      </section>
    </main>
  );
};
