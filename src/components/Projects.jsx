import { PROJECTS } from "../data/projects";
import { useReveal } from "../hooks/useReveal";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionTitle
          eyebrow="Featured Projects"
          title="A few things I've built"
          description="View my works — Both live and git versions are available along with the technologies i've worked with to build specific project."
        />

        <div
          ref={ref}
          className={`projects-grid reveal-stagger ${isVisible ? "is-visible" : ""}`}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
