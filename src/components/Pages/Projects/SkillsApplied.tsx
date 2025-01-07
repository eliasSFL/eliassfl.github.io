import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "mobile-device-detect";
import React from "react";
import { Tooltip } from "react-tooltip";
import { SkillIcons, SkillName } from "../About";
import { useIsDarkMode } from "../../../utils/darkMode";

interface Props {
  skillsArray: SkillName[];
}

export const SkillsApplied: React.FC<Props> = ({ skillsArray }) => {
  const { isDarkMode } = useIsDarkMode();
  return (
    <>
      <h3 className="font-bold my-3">Skills applied</h3>
      <div className="flex flex-row flex-wrap gap-3">
        {skillsArray.map((name, index) => {
          const icon = SkillIcons(isDarkMode)[name];
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
    </>
  );
};
