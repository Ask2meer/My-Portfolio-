export default function ExperienceCard({ experience }) {
  return (
    <div className="exp-card">
      <div className="exp-header">
        <h4>
          {experience.role} <span>@ {experience.company}</span>
        </h4>
        <span className="exp-date">{experience.date}</span>
      </div>
      <ul className="exp-bullets">
        {experience.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
