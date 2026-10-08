import { Compass, MousePointer2, LayoutGrid, Code2 } from "lucide-react";
const items = [
  [Compass, "Architecture", "Conception technique, API, bases de données"],
  [MousePointer2, "Front-end", "Angular, TypeScript, UI responsive, accessibilité"],
  [Code2, "Back-end", "Node.js, API REST, microservices, tests"],
  [LayoutGrid, "Déploiement", "CI/CD, monitoring, sécurité, maintenance"],
] as const;
export function Skills() {
  return (
    <section id="competences" className="rose"><div className="wrap">
      <div className="head"><b>04</b><span>Compétences</span></div>
      <div className="split">
        <div>
          <h2 className="black">Du cahier des charges à la maintenance.</h2>
          <p className="mute" style={{ marginTop: 16, maxWidth: "44ch" }}>Je m’implique à tous les niveaux : conception technique, back-end, front-end, tests, déploiement et maintenance.</p>
        </div>
        <div>
          <div className="skills">
            {items.map(([Icon, t, p], i) => (
              <div className="card" key={t}>
                <div className="top"><span>0{i + 1}</span><Icon size={18} color="#221e1a" /></div>
                <div><h3>{t}</h3><p>{p}</p></div>
              </div>
            ))}
          </div>
          <div className="tools" style={{ marginTop: 72 }}>
            <p className="cap" style={{ marginBottom: 8 }}>Outils et langages</p>
            <p style={{ fontWeight: 500 }}>Anglais courant · Node.js · TypeScript · Angular · React · MySQL · MariaDB · Git · Docker · GitLab & GitHub</p>
          </div>
        </div>
      </div>
    </div></section>
  );
}