import { SOCIAL_LINKS } from "../data/profile";
import "./SocialLinks.css";

const LINKS = [
  { key: "linkedin", icon: "bi-linkedin", label: "LinkedIn" },
  { key: "github", icon: "bi-github", label: "GitHub" },
  { key: "email", icon: "bi-envelope-fill", label: "Email" },
  { key: "whatsapp", icon: "bi-whatsapp", label: "WhatsApp" },
];

export default function SocialLinks({ variant = "default" }) {
  return (
    <ul className={`social-links ${variant === "footer" ? "social-links-footer" : ""}`}>
      {LINKS.map(({ key, icon, label }) => (
        <li key={key}>
          <a
            href={SOCIAL_LINKS[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="social-link"
          >
            <i className={`bi ${icon}`} aria-hidden="true"></i>
          </a>
        </li>
      ))}
    </ul>
  );
}
