import { ArrowUpRight } from "lucide-react";
const bars = [62, 48, 70, 58, 44, 66, 40, 52, 36, 30, 14];
export function Projects() {
  return (
    <section id="projet" className="dark"><div className="wrap">
      <div className="head"><b>02</b><span>Projet technique</span></div>
      <div className="split proj">
        <div>
          <p className="red cap">MediKat · 2026</p>
          <h2 style={{ margin: "12px 0 16px" }}>Une plateforme de données climatiques conçue pour la fiabilité.</h2>
          <p className="mute">Réarchitecture d’un produit de reporting climatique pour améliorer la performance, la qualité des données et la maintenance opérationnelle.</p>
          <div className="pills"><span>Architecture technique</span><span>Back-end</span><span>Déploiement</span></div>
          <div className="case">
            <div><em>01</em><h3>Le défi</h3><p className="mute" style={{ gridColumn: 2 }}>Les workflows de reporting étaient lourds, les données tardaient à se synchroniser et l’équipe avait du mal à identifier les actions prioritaires.</p></div>
            <div><em>02</em><h3>La réponse</h3><p className="mute" style={{ gridColumn: 2 }}>J’ai réorganisé l’architecture, simplifié les flux de données et mis en place un système de déploiement plus fiable, plus rapide et plus maintenable.</p></div>
          </div>
          <div className="metrics">
            <div><b>−31 %</b><small>Temps de génération des rapports</small></div>
            <div><b>2,4×</b><small>Fréquence d’utilisation hebdomadaire</small></div>
            <div><b>99,9 %</b><small>Disponibilité du service</small></div>
          </div>
          <a href="#" className="btn light">Lire la fiche technique <ArrowUpRight size={18} /></a>
        </div>
        <div className="mock" aria-hidden="true">
          <div className="dots">● ● ●  MEDIKAT / TABLEAU DE BORD</div>
          <div className="card" style={{ background: "#ece7da" }}>
            <small className="cap">Émissions du portefeuille</small>
            <h3 style={{ fontSize: 28 }}>Europe du Nord</h3>
            <div className="kpis"><div><small className="cap">Empreinte totale</small><b>18,4 kt</b></div><div><small className="cap">Projets ciblés</small><b>74 %</b></div></div>
            <div className="chart">{bars.map((h, i) => <i key={i} style={{ height: `${h + 20}%` }} />)}</div>
          </div>
        </div>
      </div>
    </div></section>
  );
}