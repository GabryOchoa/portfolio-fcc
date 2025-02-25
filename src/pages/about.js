import React from "react";
import "./styles.css";

const skills = [
  { id: 1, skill: "HTML5 and CSS3 best practices" },
  { id: 2, skill: "Responsive web design principles" },
  { id: 3, skill: "JavaScript and modern ES6+ syntax" },
  { id: 4, skill: "React.js and component-based architecture" },
  { id: 5, skill: "State management and hooks in React" },
  { id: 6, skill: "Web accessibility standards" },
];

const projectsInformation = [
  {
    id: 1,
    title: "Rothko Painting:",
    information: "Exercise in CSS styling and layout techniques.",
  },
  {
    id: 2,
    title: "Photo Gallery:",
    information: "Showcasing responsive design and image management skills.",
  },
  {
    id: 3,
    title: "HTML and CSS Quiz:",
    information:
      "Testing and reinforcing fundamental web development knowledge.",
  },
  {
    id: 4,
    title: "Nutrition Table:",
    information: "Exercise to display Nutrition Information.",
  },
  {
    id: 5,
    title: "Tribute information:",
    information:
      "show information about Dr. Srinivasa Ramanujan with fellow scientists, his contributions were to the fields of mathematical analysis, number theory, infinite series and continued fractions.",
  },
  {
    id: 6,
    title: "Balance Sheet:",
    information:
      "Exercise with tables to show information on Balance Sheets with template.",
  },
];

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About FreeCodeCamp Projects</h1>
      <div className="about-content">
        <p>
          Welcome to FreeCodeCamp Projects! This platform is designed to
          designed to showcase the various projects completed as part of the
          FreeCodeCamp FreeCodeCamp, highlighting the skills and knowledge
          acquired throughout the learning process. throughout the learning
          process.
        </p>
        <h2>Mission</h2>
        <p>
          Mission is to provide a comprehensive overview of the projects offered
          by FreeCodeCamp, serving as both a portfolio and a learning resource
          for aspiring developers.
        </p>
        <h2>Featured Projects</h2>
        <ul>
          {projectsInformation.map((val) => (
            <li key={val.id}>
              <strong>{val.title}</strong> {val.information}
            </li>
          ))}
        </ul>
        <h2>Learning Outcomes</h2>
        <p>Through these projects, we've gained practical experience in:</p>
        <ul>
          {skills.map((val) => (
            <li key={val.id}>{val.skill}</li>
          ))}
        </ul>
        <p>
          We hope these projects inspires you in your own coding journey and
          demonstrates the power of hands-on learning through FreeCodeCamp's
          curriculum.
        </p>
      </div>
    </div>
  );
};
