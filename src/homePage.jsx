import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Rothko from "./rothko";
import Gallery from "./gallery";
import Quiz from "./quiz";
import Context from "./context";
import "./homePage.css";

/*const Nav = () => {
  return (
    <nav>
      {ArrayObject.map((value) => (
        <Link to={value.route} className="nav-item-router">
          <h1>{value.title}</h1>
        </Link>
      ))}
    </nav>
  );
};

const RouteLink = () => {
  return (
    <Routes>
      <Route path="/" element={<homePage />}></Route>
      <Route path="/rothko" element={<Rothko />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/quiz" element={<Quiz />}></Route>
      <Route path="/context" element={<Context />}></Route>
    </Routes>
  );
};

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <h2>Free code camp Projects</h2>
      <Nav />
      <RouteLink />
    </div>
  );
}

const ArrayObject = [
  {
    route: "/",
    title: "Home Page",
  },
  {
    route: "/rothko",
    title: "Rothko",
  },
  {
    route: "/gallery",
    title: "Photo Gallery",
  },
  {
    route: "/quiz",
    title: "HTML/CSS Quiz",
  },
  {
    route: "/context",
    title: "Use Context",
  },
];*/

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            FreeCodeCamp Projects
          </Link>
          <div className="nav-links">
            {ArrayObject.map((value) => (
              <Link
                key={value.route}
                to={value.route}
                className={`nav-link ${
                  location.pathname === value.route ? "active" : ""
                }`}
              >
                {value.title}
              </Link>
            ))}
          </div>
          <div className="mobile-menu-button">
            <button>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-menu">
        {ArrayObject.map((value) => (
          <Link
            key={value.route}
            to={value.route}
            className={`mobile-nav-link ${
              location.pathname === value.route ? "active" : ""
            }`}
          >
            {value.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

const RouteLink = () => {
  return (
    <div className="route-content">
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/rothko" element={<Rothko />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </div>
  );
};

const HomePages = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">
          Welcome to <span className="highlight">FreeCodeCamp Projects</span>
        </h1>
        <p className="home-description">
          Explore our collection of interactive projects and learning resources
        </p>
      </div>
      <div className="project-grid">
        {ArrayObject.slice(1).map((value) => (
          <Link key={value.route} to={value.route} className="project-card">
            <h3 className="project-title">{value.title}</h3>
            <div className="project-underline"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const ArrayObject = [
  { route: "/", title: "Home Page" },
  { route: "/rothko", title: "Rothko" },
  { route: "/gallery", title: "Photo Gallery" },
  { route: "/quiz", title: "HTML/CSS Quiz" },
  { route: "/context", title: "Use Context" },
];

export default function HomePage() {
  return (
    <div className="app-container">
      <Nav />
      <RouteLink />
    </div>
  );
}
