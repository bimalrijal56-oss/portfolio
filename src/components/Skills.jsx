import SectionTitle from "./SectionTitle";
import TechMarquee from "./TechMarquee";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionTitle
          eyebrow="My Skills"
          title="Technologies I work with"
          description="A focused toolkit for building full-stack web applications, from the database up to the interface."
        />

        <TechMarquee />
      </div>
    </section>
  );
}
