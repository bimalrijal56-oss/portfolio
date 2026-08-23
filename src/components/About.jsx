import { PROFILE } from "../data/profile";
import { useReveal } from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const [imgRef, imgVisible] = useReveal();
  const [textRef, textVisible] = useReveal();

  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <div ref={imgRef} className={`about-image reveal ${imgVisible ? "is-visible" : ""}`}>
          <img src="/images/intro-img.jpeg" alt="Bimal Rijal working at a desk" />
        </div>

        <div ref={textRef} className={`about-content reveal ${textVisible ? "is-visible" : ""}`}>
          <span className="eyebrow">About Me</span>
          <h2>Building thoughtful web applications, end to end</h2>
          <p className="about-text">{PROFILE.aboutText}</p>

          <ul className={`about-highlights reveal-stagger ${textVisible ? "is-visible" : ""}`}>
            {PROFILE.aboutHighlights.map((item) => (
              <li key={item}>
                <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
