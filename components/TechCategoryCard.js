export default function TechCategoryCard({ category }) {
  return (
    <div className="tech-category-card">
      <h3>
        <i className={category.icon}></i> {category.title}
      </h3>
      <div className="tech-pills">
        {category.pills.map((pill) => (
          <span key={pill}>{pill}</span>
        ))}
      </div>
    </div>
  );
}
