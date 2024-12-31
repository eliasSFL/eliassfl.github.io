import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../src/assets/Elias_Chew_logo.png";

export const Navigation: React.FC = () => {
  return (
    <nav>
      <div className="nav-logo">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
          className="text-5xl"
        >
          <img src={logo} alt="Elias" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? `nav-link-active` : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? `nav-link-active` : ""}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `nav-link ${isActive ? `nav-link-active` : ""}`
            }
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `nav-link ${isActive ? `nav-link-active` : ""}`
            }
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-link ${isActive ? `nav-link-active` : ""}`
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? `nav-link-active` : ""}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
