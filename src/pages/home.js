import React, { useCallback, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Rothko from "../rothko";
import Gallery from "../gallery";
import Quiz from "../quiz";
import Tribute from "../Tribute-page";
import BalanceSheet from "../balance-sheet";
import { ShowNutritionForm } from "../nutrition";
import { About } from "./about";
import "./styles.css";

//Navigation Component
const Nav = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const renderLinks = useCallback(
    (className, onClickHandler = null) =>
      links
        .filter(({ title }) => title === "Home" || title === "About")
        .map(({ route, title }) => (
          <Link
            key={route}
            to={route}
            className={`${className} ${
              location.pathname === route ? "active" : ""
            }`}
            onClick={onClickHandler}
          >
            {title}
          </Link>
        )),
    [location.pathname]
  );

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            FreeCodeCamp
          </Link>
          <div className="nav-links">
            {/* {links
              .filter(
                (value) => value.title === "Home" || value.title === "About"
              )
              .map((value) => (
                <Link
                  key={value.route}
                  to={value.route}
                  className={`nav-link ${
                    location.pathname === value.route ? "active" : ""
                  }`}
                >
                  {value.title}
                </Link>
              ))} */}
            {renderLinks("nav-link")}
          </div>
          {/* Botón Hamburguesa */}
          <div className="mobile-menu-button">
            <button
              onClick={toggleMobileMenu}
              className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {/* <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {links
          .filter((value) => value.title === "Home" || value.title === "About")
          .map((value) => (
            <Link
              key={value.route}
              to={value.route}
              className={`mobile-nav-link ${
                location.pathname === value.route ? "active" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {value.title}
            </Link>
          ))}
      </div> */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {renderLinks("mobile-nav-link", () => setIsMobileMenuOpen(false))}
      </div>
    </nav>
  );
};

const RouteLink = () => {
  return (
    <div className="route-content">
      <Routes>
        {route.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
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

const links = [
  { route: "/", title: "Home" },
  { route: "/about", title: "About" },
  { route: "/rothko", title: "Rothko" },
  { route: "/gallery", title: "Photo Gallery" },
  { route: "/quiz", title: "HTML/CSS Quiz" },
  { route: "/nutrition", title: "Nutrition Table" },
  { route: "/Tribute-page", title: "Tribute Information" },
  { route: "/balance-sheet", title: "Balance Sheet" },
];

const route = [
  { path: "/", element: <HomePages /> },
  { path: "/about", element: <About /> },
  { path: "/rothko", element: <Rothko /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/nutrition", element: <ShowNutritionForm /> },
  { path: "/Tribute-page", element: <Tribute /> },
  { path: "/balance-sheet", element: <BalanceSheet /> },
];

export default function HomePage() {
  return (
    <div className="app-container">
      <Nav />
      <RouteLink />
    </div>
  );
}
