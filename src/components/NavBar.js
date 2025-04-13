import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Premier Logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar 
        expand="md" 
        style={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.8)" : "white", 
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "background-color 0.3s ease-in-out",
          padding: "5px 0"
        }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{ height: "40px", width: "auto" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ gap: "70px" }}> {/* More spacing between nav items */}
              <Nav.Link 
                href="#home" 
                onClick={() => onUpdateActiveLink('home')}
                style={{
                  color: activeLink === 'home' ? "purple" : "black", 
                  fontWeight: activeLink === 'home' ? "bold" : "normal"
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                onClick={() => onUpdateActiveLink('skills')}
                style={{
                  color: activeLink === 'skills' ? "purple" : "black", 
                  fontWeight: activeLink === 'skills' ? "bold" : "normal"
                }}
              >
                About
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                onClick={() => onUpdateActiveLink('projects')}
                style={{
                  color: activeLink === 'projects' ? "purple" : "black", 
                  fontWeight: activeLink === 'projects' ? "bold" : "normal"
                }}
              >
                Career
              </Nav.Link>
            </Nav>
            <span className="navbar-text" style={{ display: "flex", alignItems: "center" }}>
              <div className="social-icon" style={{ display: "flex", gap: "20px", marginRight: "25px" }}> {/* Increased spacing */}
                <a href="https://www.linkedin.com/company/premier-home-tuition/about/" style={{ background: "#B2B2B2", borderRadius: "50%", padding: "10px", display: "flex", border: "2px solid black" }}>
                  <img src={navIcon1} alt="" style={{ filter: "brightness(0)", width: "24px" }} />
                </a>
                <a href="mailto:premierhometuitiongh@gmail.com" style={{ background: "#B2B2B2", borderRadius: "50%", padding: "10px", display: "flex", border: "2px solid black" }}>
                  <img src={navIcon2} alt="" style={{ filter: "brightness(0)", width: "24px" }} />
                </a>
                <a href="https://www.instagram.com/premier_home_tuition/?hl=en" style={{ background: "#B2B2B2", borderRadius: "50%", padding: "10px", display: "flex", border: "2px solid black" }}>
                  <img src={navIcon3} alt="" style={{ filter: "brightness(0)", width: "24px" }} />
                </a>
              </div>
              <HashLink to='#connect'>
                <button 
                  style={{ 
                    background: "black", 
                    color: "purple", 
                    border: "2px solid purple", 
                    padding: "8px 16px", 
                    borderRadius: "5px", 
                    fontWeight: "bold",
                    cursor: "pointer" 
                  }}
                  onMouseOver={(e) => { e.target.style.background = "purple"; e.target.style.color = "white"; }}
                  onMouseOut={(e) => { e.target.style.background = "rgba(255, 255, 255, 0.8)"; e.target.style.color = "purple"; }}
                >
                  Request A Tutor
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
