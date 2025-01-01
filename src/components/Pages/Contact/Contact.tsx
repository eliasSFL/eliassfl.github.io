import React from "react";
import emailIcon from "../../../assets/mail.png";
import phoneIcon from "../../../assets/phone-call.png";
import linkedInIcon from "../../../assets/linkedin.png";
import gitHubIcon from "../../../assets/social.png";

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl mt-6 md:mt-10">Contact Me</h1>
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQGDJRqJdBg2WQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720013407415?e=1741219200&v=beta&t=BaylGWJfRuAOteyM68mhGIsN63ki24vErAJhF-LeqTY"
        alt="Elias"
        className="rounded-full w-32 h-32 md:w-40 md:h-40 mt-4"
      />
      <div className="flex flex-col md:flex-row md:flex-wrap mt-8 justify-around w-full gap-4 md:gap-8">
        {/* Email */}
        <div className="flex flex-col items-center w-full sm:w-auto">
          <img
            src={emailIcon}
            alt="Email"
            className="w-24 h-24 md:w-40 md:h-40"
          />
          <span className="text-2xl md:text-4xl mt-2">Email</span>
          <a
            href="mailto:elias.chew1999@gmail.com"
            className="text-blue-400 mt-2"
          >
            elias.chew1999@gmail.com
          </a>
        </div>
        {/* LinkedIn */}
        <div className="flex flex-col items-center">
          <img src={linkedInIcon} alt="LinkedIn" className="w-40 h-40" />
          <span className="text-4xl mt-2">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/eliassfl"
            className="text-blue-400 mt-2"
            target="_blank"
            rel="noreferrer"
          >
            www.linkedin.com/in/eliassfl
          </a>
        </div>
        {/* GitHub */}
        <div className="flex flex-col items-center">
          <img src={gitHubIcon} alt="GitHub" className="w-40 h-40" />
          <span className="text-4xl mt-2">GitHub</span>
          <a
            href="https://www.github.com/eliasSFL"
            className="text-blue-400 mt-2"
            target="_blank"
            rel="noreferrer"
          >
            www.github.com/eliasSFL
          </a>
        </div>
      </div>

      {/* <p className="mt-4">
        Email:{" "}
        <a href="mailto:elias.chew1999@gmail.com" className="text-blue-400">
          elias.chew1999@gmail.com
        </a>
      </p>
      <p>
        Phone: <span className="text-blue-400">+65 8482 2808</span>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/eliassfl"
          className="text-blue-400"
          target="_blank"
          rel="noreferrer"
        >
          www.linkedin.com/in/eliassfl
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://www.github.com/eliasSFL"
          className="text-blue-400"
          target="_blank"
          rel="noreferrer"
        >
          www.github.com/eliasSFL
        </a>
      </p> */}
    </div>
  );
};
