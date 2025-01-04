import React from "react";
import portfolio from "../../../src/assets/portfolio.png";
import { SkillIcons, SkillName } from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "mobile-device-detect";
import { Tooltip } from "react-tooltip";

const PortfolioSiteSkills: SkillName[] = [
  "HTML5",
  "CSS3",
  "TypeScript",
  "React",
  "NodeJS",
  "Yarn",
  "Git",
  "GitHub",
];

export const Projects: React.FC = () => {
  return (
    <main className="m-5 px-4 max-w-5xl mx-auto flex flex-col">
      {/* Portfolio Website */}
      <section id="website" className="flex flex-row gap-5 justify-between">
        <article>
          <h2>Portfolio Website</h2>
          <h3 className="font-bold mt-3">
            Why I decided to build my own portfolio site
          </h3>
          <p>
            As a software developer, I believe in showcasing my technical skills
            and creativity. Instead of using pre-made templates like Wiz or
            SquareSpace, I chose to develop my portfolio website from scratch.
            This decision allows me to demonstrate my proficiency in web
            development and highlight the skills I’ve mastered.
          </p>
          <h3 className="font-bold mt-3">Skills applied</h3>
          <div className="flex flex-row flex-wrap gap-3">
            {PortfolioSiteSkills.map((name, index) => {
              const icon = SkillIcons[name];
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
        </article>
        <img
          src={portfolio}
          alt="Elias Portfolio"
          className="h-60 cursor-pointer portfolio"
          onClick={() => window.open(portfolio, "_blank")}
        />
      </section>
    </main>
  );
};
