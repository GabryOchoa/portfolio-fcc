import React, { useState, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { links } from "../data/links"; // Import navigation links
import "../pages/styles.css";

const Nav = () => {
  const location = useLocation(); // Get the current URL path
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  // Toggle the mobile menu state
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  /**
   * Memoized navigation links to prevent unnecessary re-renders.
   * This filters and maps only "Home" and "About" links and updates only when `location.pathname` changes.
   */

  const filteredLinks = useMemo(
    () =>
      links
        .filter(({ title }) => ["Home", "About"].includes(title))
        .map(({ route, title }) => (
          <Link
            key={route}
            to={route}
            className={`nav-link ${
              location.pathname === route ? "active" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu when a link is clicked
          >
            {title}
          </Link>
        )),
    [location.pathname] // Dependency array: Recalculate only when the path changes
  );

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            FreeCodeCamp
          </Link>
          <div className="nav-links">{filteredLinks}</div>
          {/* Mobile Menu Button  */}
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

      {/* Mobile Navigation Menu  */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {filteredLinks}
      </div>
    </nav>
  );
};

export default Nav;
