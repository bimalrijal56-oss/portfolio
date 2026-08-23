import { PROFILE } from "../data/profile";
import SocialLinks from "./SocialLinks";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo-image">
            <img src="/images/logo-1.jpeg" alt={PROFILE.name} />
          </div>
          <div>
            <h3>{PROFILE.name}</h3>
            <p>{PROFILE.title}</p>
          </div>
        </div>

        <SocialLinks variant="footer" />

        <div className="footer-meta">
          <p>
            © {year} {PROFILE.name}. All rights reserved.
          </p>
          <p className="footer-built">
            <i className="bi bi-code-slash" aria-hidden="true"></i> Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}
