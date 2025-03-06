import { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaBell } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="logo">
          <img src="../../src/img/kgplogo_white.png" alt="Logo" />
          <h2>YEARBOOK</h2>
        </div>

        {/* Desktop Menu */}

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Fill Itch List</a></li>
          <li><a href="#">View Itch List</a></li>
          <li><a href="#">Testimonial</a></li>
          <li><a href="#">Polls</a></li>

        </ul>
        <ul className={`nav-links ${isOpen ? "" : ""}`}>
          <li>
            <input type="text" placeholder="Search Your Friend" className="search-input"/>
          </li>
          <li>
            <button style={{ outline: 'none' }}><FaSearch className="icon-search" /></button>

          </li>
          <li>
          <FaBell className="icon-notification" />
          </li>
        </ul>
      </div>
        <div className="profilepic-navbar"><button className="profile-open" style={{ outline: 'none' }}><img src="../../src/img/profilepic_test2.jpg" alt="" /></button>
        </div>
        <div className="icons">
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="mobile-menu">
          <ul>
          <li>
            <input type="text" placeholder="Search Your Friend" className="search-input"/>
            <button style={{ outline: 'none' }}><FaSearch className="icon" /></button>
          </li>
          <li>
          <FaBell className="icon" />
          </li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Fill Itch List</a></li>
            <li><a href="#">View Itch List</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">Polls</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;