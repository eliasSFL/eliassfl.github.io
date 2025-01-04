import React from "react";
import portfolio from "../../../src/assets/portfolio.png";
import portfolio_mobile from "../../../src/assets/portfolio_mobile.png";
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
      <section className="mb-3">
        <h1 className="text-5xl">Project Showcase</h1>
      </section>
      {/* Portfolio Website */}
      <section id="website" className="md:grid md:grid-cols-[1fr_auto] gap-5">
        <article>
          <h2>Portfolio Website</h2>
          <h3 className="font-bold mt-3">
            Why I decided to build my own portfolio site
          </h3>
          <div className="flex flex-col gap-3">
            <p>
              As a software developer, I believe in showcasing my technical
              skills and creativity. Instead of using pre-made templates like
              Wiz or SquareSpace, I chose to develop my portfolio website from
              scratch. This decision allows me to demonstrate my proficiency in
              web development and highlight the skills I’ve mastered.
            </p>
            <p>
              To develop this website, I utilized React.js and TypeScript, along
              with a blend of CSS and Tailwind CSS. I ensured that the site is
              fully responsive, providing an optimal viewing experience on both
              large and small screens.
            </p>
          </div>
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
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-center">Desktop View</span>
            <img
              src={portfolio}
              alt="Elias Portfolio"
              className="md:h-60 cursor-pointer portfolio"
              onClick={() => window.open(portfolio, "_blank")}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-center">Mobile View</span>
            <img
              src={portfolio_mobile}
              alt="Elias Portfolio Mobile"
              className="md:h-60 md:w-[112px] cursor-pointer portfolio"
              onClick={() => window.open(portfolio_mobile, "_blank")}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
