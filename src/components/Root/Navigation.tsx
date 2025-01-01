import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/Elias_Chew_logo.png";

const NAVIGATION_LINKS = {
  About: "/portfolio",
  Projects: "/portfolio/projects",
  Contact: "/portfolio/contact",
};

export const Navigation: React.FC = () => {
  return (
    <nav>
      <div className="nav-logo">
        <Link
          to="/portfolio"
          style={{ textDecoration: "none", color: "inherit" }}
          className="text-5xl"
        >
          <img src={logo} alt="Elias" />
        </Link>
      </div>
      <ul className="nav-links">
        {Object.entries(NAVIGATION_LINKS).map(([key, value], index) => (
          <li key={index}>
            <NavLink
              to={value}
              end={key === "About"}
              className={({ isActive }) =>
                `nav-link ${isActive ? `nav-link-active` : ""}`
              }
            >
              {key}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
