const carriers = [
  { name: "Aetna\u00ae", color: "var(--navy-800)" },
  { name: "Cigna Healthcare\u00ae", color: "var(--blue-600)" },
  { name: "Humana\u00ae", color: "var(--teal-600)" },
  { name: "UnitedHealthcare\u00ae", color: "var(--navy-700)" },
  { name: "Wellcare\u00ae", color: "var(--teal-500)" },
];

export default function Carriers() {
  return (
    <section className="carriers">
      <p className="label">Plans in your area may be provided by</p>
      <div className="carrier-list">
        {carriers.map((c) => (
          <span key={c.name} className="carrier-pill" style={{ background: c.color }}>
            {c.name}
          </span>
        ))}
      </div>
    </section>
  );
}