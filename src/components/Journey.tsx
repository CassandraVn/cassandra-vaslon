const jobs = [
  ["Hackathon", "Mars 2026", "France Travail, Rennes", "Conception et développement en équipe, dans un délai de 3 jours, d’une extension Chrome permettant d’analyser automatiquement les CGV présentes sur une page web."],
  ["Apprentie conceptrice développeuse d'applications", "2021—2024", "Laboratoire numérique, Brest", "Développement et évolution d’applications web Full-Stack pour la Marine nationale, de l’analyse des besoins à la mise en production, en collaboration avec les utilisateurs et les équipes techniques."],
];
export function Journey() {
  return (
    <section id="parcours"><div className="wrap">
      <div className="head"><b>03</b><span>Expériences</span></div>
      <div className="split">
        <h2 className="black">Une alternance centrée sur le développement de bout en bout.</h2>
        <ol className="tl">
          {jobs.map(([t, d, c, p]) => (
            <li key={t}><div className="row"><h3>{t}</h3><span>{d}</span></div><p className="red" style={{ fontSize: 14 }}>{c}</p><p className="mute" style={{ marginTop: 8 }}>{p}</p></li>
          ))}
        </ol>
      </div>
    </div></section>
  );
}