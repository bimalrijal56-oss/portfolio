import { PROFILE, HERO_INFO_CARDS } from "../data/profile";
import { scrollToSection } from "../utils/helpers";
import SocialLinks from "./SocialLinks";
import MagicRings from "./MagicRings";
import "./Hero.css";

const CARD_ICONS = ["bi-geo-alt-fill", "bi-code-slash", "bi-briefcase-fill"];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-visual">
          <div className="hero-rings">
            <div className="hero-magic-rings-wrapper" aria-hidden="true">
              <MagicRings
                color="#2dd4a7"
                colorTwo="#34d399"
                ringCount={5}
                speed={0.75}
                attenuation={15}
                lineThickness={1.3}
                baseRadius={0.32}
                radiusStep={0.08}
                scaleRate={0.06}
                opacity={0.68}
                blur={0}
                noiseAmount={0.02}
                rotation={0}
                ringGap={1.4}
                fadeIn={0.7}
                fadeOut={0.5}
                followMouse={true}
                mouseInfluence={0.12}
                hoverScale={1.1}
                parallax={0.03}
                clickBurst={true}
              />
            </div>

            <div className="hero-rings-photo"data-aos="fade-up">
              <img
                src="/images/hero-img.jpeg"
                alt="Portrait of Bimal Rijal, Full-Stack Developer"
              />
            </div>
          </div>

          <div className="hero-actions">
            <a href="BimalRijal.pdf" className="btn btn-primary hero-btn" download>
              <i className="bi bi-download" aria-hidden="true"></i> Download CV
            </a>
            <button
              type="button"
              className="btn btn-outline hero-btn"
              onClick={() => scrollToSection("contact")}
            >
              <i className="bi bi-envelope" aria-hidden="true"></i> Contact Me
            </button>
          </div>
        </div>

        <div className="hero-content"data-aos="fade-up">
          <span className="eyebrow">Full-Stack Developer</span>
          <h1 className="hero-name">{PROFILE.name}</h1>
          <h2 className="hero-tagline text-accent">{PROFILE.tagline}</h2>
          <p className="hero-intro">{PROFILE.intro}</p>

          <div className="hero-cards">
            {HERO_INFO_CARDS.map((card, i) => (
              <div className="info-card glass-card" key={card.label}>
                <span className="info-card-icon">
                  <i className={`bi ${CARD_ICONS[i]}`} aria-hidden="true"></i>
                </span>
                <div>
                  <p className="info-card-label">{card.label}</p>
                  <p className="info-card-value">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-connect">
            <span className="eyebrow">Connect With Me</span>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
