import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJs,
  faLinux,
  faNode,
  faNpm,
  faReact,
  faSquareGithub,
  faYarn,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "mobile-device-detect";
import React from "react";
import { Tooltip } from "react-tooltip";

const SkillIcons: { [key: string]: IconDefinition } = {
  HTML5: faHtml5,
  CSS3: faCss3Alt,
  JavaScript: faJs,
  React: faReact,
  NodeJS: faNode,
  npm: faNpm,
  Yarn: faYarn,
  Git: faGitAlt,
  GitHub: faSquareGithub,
  Linux: faLinux,
};

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
        <div className="flex flex-row flex-wrap gap-3">
          {Object.entries(SkillIcons).map(([name, icon], index) => (
            <>
              <FontAwesomeIcon
                key={index}
                icon={icon}
                className={`w-10 h-10 md:w-16 md:h-16 ${name}`}
              />
              <Tooltip
                anchorSelect={`.${name}`}
                place="bottom"
                openOnClick={isMobile ? true : false}
              >
                {name}
              </Tooltip>
            </>
          ))}
        </div>
      </section>
    </main>
  );
};
