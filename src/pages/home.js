import React from "react";
import { Link } from "react-router-dom";
import { links } from "../data/links";
import "../pages/styles.css";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">
          Welcome to <span className="highlight">FreeCodeCamp Projects</span>
        </h1>
        <p className="home-description">
          Explore My collection of interactive projects and learning resources
        </p>
      </div>
      <div className="project-grid">
        {links.slice(2).map((value) => (
          <Link key={value.route} to={value.route} className="project-card">
            <h3 className="project-title">{value.title}</h3>
            <div className="project-underline"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};
