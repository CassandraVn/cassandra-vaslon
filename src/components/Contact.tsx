import { ArrowUpRight } from "lucide-react";
export function Contact() {
  return (
    <section id="contact" className="contact"><div className="wrap split">
      <div>
        <p className="tag" style={{ color: "#fff" }}>Ouverte aux missions techniques</p>
        <h2>Un produit à développer de A à Z ?</h2>
        <p className="lead">Partagez votre cahier des charges, vos contraintes techniques et vos objectifs. Je vous réponds sous 48 heures ouvrées.</p>
      </div>
      <div>
        <a href="mailto:vasloncassandra@gmail.com" className="mail">vasloncassandra@gmail.com <ArrowUpRight size={18} /></a>
        <div className="meta"><span>Remote · Missions sur site</span></div>
      </div>
    </div></section>
  );
}