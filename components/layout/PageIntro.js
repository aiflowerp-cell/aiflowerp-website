export function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro">
      <div className="container narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="lead">{description}</p>}
      </div>
    </section>
  );
}
