import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const { title, description, image, technologies, github, live } = project;
  const imageSrc = image
    ? image.startsWith("/") || image.startsWith("http")
      ? image
      : `/${image}`
    : "/images/project-3.png";

  return (
    <article className="project-card glass-card" data-aos="fade-up">
      <div className="project-image">
        <img src={imageSrc} alt={`${title} project preview`} loading="lazy" />
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        <ul className="project-tech">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-actions">
          <a
            href={github || "#"}
            className="btn btn-outline project-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub`}
          >
            <i className="bi bi-github" aria-hidden="true"></i> GitHub
          </a>
          <a
            href={live || "#"}
            className="btn btn-primary project-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${title}`}
          >
            <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
