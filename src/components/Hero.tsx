import { ArrowUpRight } from "lucide-react";
export function Hero() {
  return (
    <section className="hero"><div className="wrap split">
      <div>
        <div className="tag">Disponible pour missions techniques</div>
        <p className="red">Développeuse full-stack en Node.js et Angular.</p>
        <h1 className="black">Je conçois, code et déploie des applications web de A à Z.</h1>
        <p className="lead">Anciennement conceptrice développeuse d'applications web à la Marine nationale de Brest, je cherche un poste où je pourrais mettre à profit mes connaissances et développer de nouvelles compétences.</p>
        <a href="#parcours" className="btn">Voir mon parcours <ArrowUpRight size={18} /></a>
      </div>
      <div className="hero-side">
        <a
          href="./CV_Cassandra-Vaslon.pdf"
          download="CV_Cassandra-Vaslon.pdf"
          className="arch"
        >CV</a>
        <p className="left">Architecture, back-end, front-end, déploiement et maintenance.<br /><small style={{ color: "var(--ink)", letterSpacing: ".05em" }}>FRANCE · Bretagne </small></p>
      </div>
    </div></section>
  );
}