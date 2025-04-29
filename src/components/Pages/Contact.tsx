import {
  faDiscord,
  faGithub,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import profilePicture from "../../../src/assets/Elias-Profile-photo.jpeg";

interface ContactItem {
  icon: IconDefinition;
  link?: string;
  display: string;
  hover?: boolean;
}

const contactInfo: Record<string, ContactItem> = {
  Email: {
    icon: faEnvelope,
    link: "mailto:elias.chew1999@gmail.com",
    display: "elias.chew1999@gmail.com",
    hover: true,
  },
  Discord: {
    icon: faDiscord,
    display: "eliassfl",
  },
  LinkedIn: {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/eliascse",
    display: "linkedin.com/in/eliascse",
    hover: true,
  },
  GitHub: {
    icon: faGithub,
    link: "https://www.github.com/eliasSFL",
    display: "github.com/eliasSFL",
    hover: true,
  },
};

export const Contact: React.FC = () => {
  const [iframeWidth, setIframeWidth] = useState(770);

  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(770, Math.max(window.innerWidth - 40));
      setIframeWidth(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <h1 className="mt-6">Contact Me</h1>
      <img
        src={profilePicture}
        alt="Elias"
        className="rounded-full w-32 h-32 md:w-40 md:h-40 mt-4"
      />
      <div className="flex flex-col items-center gap-3 mt-4 w-full">
        <h2 className="my-5">Socials</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-around w-2/3 gap-4 md:gap-8">
          {Object.entries(contactInfo).map(
            ([social, { link, icon, display, hover }]) => (
              <div
                key={social}
                className={`flex flex-col items-center ${hover ? "cursor-pointer" : ""}`}
                onClick={() => link && handleClick(link)}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="w-24 h-24 md:w-40 md:h-40"
                />
                <span className="text-4xl mt-2">{social}</span>
                {link ? (
                  <a
                    href={link}
                    className="text-blue-400 mt-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {display}
                  </a>
                ) : (
                  <span className="text-blue-400 mt-2">{display}</span>
                )}
              </div>
            )
          )}
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center">
        <h2>Or fill in this form</h2>
        <iframe
          title="Contact Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSezSd2a3VpxDfErlGTmM8WtrgGFUrqLhu5Azs-MP_4pS6JE3w/viewform?embedded=true"
          width={iframeWidth}
          height={600}
        >
          {/* Show loading when form hasn't loaded */}
          Loading…
        </iframe>
      </div>
    </div>
  );
};
