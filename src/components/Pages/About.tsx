import {
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faLinux,
  faNode,
  faNpm,
  faReact,
  faYarn,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import typescriptIcon from "../../../src/assets/typescript.png";
import typescriptInverted from "../../../src/assets/typescript-invert.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "mobile-device-detect";
import React from "react";
import { Tooltip } from "react-tooltip";
import { useIsDarkMode } from "../../utils/darkMode";

export const SkillIcons = (isDarkMode?: boolean) =>
  ({
    HTML5: faHtml5,
    CSS3: faCss3Alt,
    JavaScript: faJs,
    TypeScript: isDarkMode ? typescriptInverted : typescriptIcon,
    React: faReact,
    NodeJS: faNode,
    npm: faNpm,
    Yarn: faYarn,
    Git: faGitAlt,
    GitHub: faGithub,
    Linux: faLinux,
  }) as Record<string, IconDefinition | string>;

export type SkillName = keyof ReturnType<typeof SkillIcons>;

export const About: React.FC = () => {
  const { isDarkMode } = useIsDarkMode();
  return (
    <main className="m-0 px-4 max-w-5xl mx-auto flex flex-col gap-5">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="mr-0 md:mr-4">
          <h2>About Me</h2>
          <p>
            Hi I'm Elias, a Software Engineer at Thought Farm Pty Ltd based in
            Singapore. I'm in the midst of a career transition from the creative
            world to the tech world. Transitioning from a creative background to
            software development has enabled me to infuse creativity into my
            coding practices. I am driven by a desire to make a significant
            impact by resolving technical challenges and broadening my expertise
            in web development. I have extensive experience developing and
            maintaining large-scale applications using React, TypeScript,
            NodeJS, and MongoDB.
          </p>
        </div>
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGDJRqJdBg2WQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720013407415?e=1741219200&v=beta&t=BaylGWJfRuAOteyM68mhGIsN63ki24vErAJhF-LeqTY"
          alt="Elias"
          className="rounded-3xl w-32 h-32 md:w-40 md:h-40 mt-4"
        />
      </section>
      <section id="skills">
        <h2>Technical Skills</h2>
        <div className="flex flex-row flex-wrap gap-3">
          {Object.entries(SkillIcons(isDarkMode)).map(([name, icon], index) => {
            const isString = typeof icon === "string";
            return (
              <>
                {isString ? (
                  <img
                    src={icon}
                    alt={name}
                    className={`w-10 h-10 md:w-16 md:h-16 ${name}`}
                  />
                ) : (
                  <FontAwesomeIcon
                    key={index}
                    icon={icon}
                    className={`w-10 h-10 md:w-16 md:h-16 ${name}`}
                  />
                )}
                <Tooltip
                  anchorSelect={`.${name}`}
                  place="bottom"
                  openOnClick={!!isMobile}
                >
                  {name}
                </Tooltip>
              </>
            );
          })}
        </div>
      </section>
      <section className="mb-5">
        <h2>Soft Skills</h2>
        <ul>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Creativity</li>
          <li>Collaboration</li>
          <li>Inquisitiveness</li>
        </ul>
      </section>
    </main>
  );
};
