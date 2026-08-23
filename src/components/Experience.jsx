import { EXPERIENCE } from "../data/experience";
import { useReveal } from "../hooks/useReveal";
import SectionTitle from "./SectionTitle";
import "./Experience.css";

export default function Experience() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've worked"
          description="Companies I've worked with — overview my works in one of major leading IT companies of Nepal"
        />

        <div
          ref={ref}
          className={`experience-timeline reveal-stagger ${isVisible ? "is-visible" : ""}`}
        >
          {EXPERIENCE.map((role) => (
            <article
              className="experience-item glass-card"
              key={`${role.company}-${role.title}`}
              data-aos="fade-up"
            >
              <div className="experience-marker" aria-hidden="true"></div>
              <div className="experience-body">
                <div className="experience-head">
                  <h3>{role.title}</h3>
                  <span className="experience-duration">{role.duration}</span>
                </div>
                <p className="experience-company">{role.company}</p>
                <p className="experience-desc">{role.description}</p>

                <ul className="experience-tech">
                  {role.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
