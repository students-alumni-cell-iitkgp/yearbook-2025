import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch, FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo Section */}
        <div className="logo">
          <img src="/src/img/kgplogo_white.png" alt="Logo" />
          <h2>YEARBOOK</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/home" 
              className={({ isActive }) => isActive ? "navbar-active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/Trending" 
              className={({ isActive }) => isActive ? "navbar-active" : "nav-link"}
            >
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/ItchListPage" 
              className={({ isActive }) => isActive ? "navbar-active" : "nav-link"}
            >
              Fill Itch List
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/ViewItchList" 
              className={({ isActive }) => isActive ? "navbar-active" : "nav-link"}
            >
              View Itch List
            </NavLink>
          </li>
          {/* <li>
            <NavLink 
              to="/Testimonial" 
              className={({ isActive }) => isActive ? "navbar-active" : "nav-link"}
            >
              Testimonial
            </NavLink>
          </li> */}
          <li>
            <NavLink 
              to="/Polls" 
              className={({ isActive }) => isActive ? "navbar-active" : "nav-link"}
            >
              Polls
            </NavLink>
          </li>
        </ul>

        {/* Search, Notification & Profile Section */}
        <div className="navbar-right">
          <div className={`search-container ${isSearchFocused ? "focused" : ""}`}>
            <input 
              type="text" 
              placeholder="Search Your Friend" 
              className="search-input"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <button className="search-button">
              <FaSearch className="search-icon" />
            </button>
          </div>

          {/* <button className="notification-button">
            <FaBell className="notification-icon" />
          </button> */}

          {/* <NavLink className="profile-link" to="/profile">
            <div className="profile-container">
              <img src="/src/img/profilepic_test2.jpg" alt="Profile" />
            </div>
          </NavLink> */}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes className="icon-times" /> : <FaBars className="icon-bars" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <img src="/src/img/kgplogo_white.png" alt="Logo" />
              <h2>YEARBOOK</h2>
            </div>
            <button 
              className="close-menu-btn" 
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          <ul>
            <li>
              <NavLink 
                to="/home" 
                className={({ isActive }) => isActive ? "mobile-active" : ""}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/Trending" 
                className={({ isActive }) => isActive ? "mobile-active" : ""}
                onClick={() => setIsOpen(false)}
              >
                Trending
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/ItchListPage" 
                className={({ isActive }) => isActive ? "mobile-active" : ""}
                onClick={() => setIsOpen(false)}
              >
                Fill Itch List
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/ViewItchList" 
                className={({ isActive }) => isActive ? "mobile-active" : ""}
                onClick={() => setIsOpen(false)}
              >
                View Itch List
              </NavLink>
            </li>
            {/* <li>
              <NavLink 
                to="/Testimonial" 
                className={({ isActive }) => isActive ? "mobile-active" : ""}
                onClick={() => setIsOpen(false)}
              >
                Testimonial
              </NavLink>
            </li> */}
            <li>
              <NavLink 
                to="/Polls" 
                className={({ isActive }) => isActive ? "mobile-active" : ""}
                onClick={() => setIsOpen(false)}
              >
                Polls
              </NavLink>
            </li>
            {/* <li className="mobile-profile">
              <NavLink 
                to="/profile" 
                className="mobile-profile-link"
                onClick={() => setIsOpen(false)}
              >
                <img src="/src/img/profilepic_test2.jpg" alt="Profile" />
                <span>My Profile</span>
              </NavLink>
            </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;