import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/nav";
import { PROFILE } from "../data/profile";
import { scrollToSection } from "../utils/helpers";
import { useScrollSpy } from "../hooks/useScrollSpy";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(NAV_LINKS.map((link) => link.href));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          aria-label={`${PROFILE.name} — home`}
        >
          <div className="logo-image">
            <img src="/images/logo-1.jpeg" alt={PROFILE.name} />
          </div>
          <span className="logo-text">{PROFILE.name}</span>
        </a>

        <nav className="nav-links nav-links-desktop" aria-label="Primary">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={`#${href}`}
              className={`nav-link ${activeId === href ? "is-active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(href);
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`} aria-hidden="true"></i>
        </button>
      </div>

      <nav
        className={`nav-links nav-links-mobile ${isOpen ? "is-open" : ""}`}
        aria-label="Mobile"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={`#${href}`}
            className={`nav-link ${activeId === href ? "is-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(href);
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
