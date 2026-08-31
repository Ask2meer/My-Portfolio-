export default function DashboardCard({ dashboard }) {
  return (
    <article className="dash-card">
      <div className="dash-image-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={dashboard.image} alt={dashboard.alt} className="dash-img" loading="lazy" />
        <span className="dash-tag">{dashboard.tag}</span>
      </div>
      <div className="dash-info">
        <h3>{dashboard.title}</h3>
        <p className="dash-desc">{dashboard.desc}</p>
        <div className="dash-tech-stack">
          {dashboard.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="dash-highlights">
          {dashboard.highlights.map((h) => (
            <div key={h.label}>
              <strong>{h.value}</strong> {h.label}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
