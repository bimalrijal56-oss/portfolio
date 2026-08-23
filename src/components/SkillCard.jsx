import "./SkillCard.css";

export default function SkillCard({ category, items }) {
  return (
    <div className="skill-card glass-card">
      <h3 className="skill-card-title">{category}</h3>
      <ul className="skill-card-list">
        {items.map((item) => (
          <li key={item} className="skill-badge">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
