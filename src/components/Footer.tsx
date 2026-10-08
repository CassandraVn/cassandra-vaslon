import { ArrowUpRight, ArrowUp } from "lucide-react";
export function Footer() {
  return (
    <footer className="dark foot"><div className="wrap">
      <div className="row">
        <div><p className="big">Cassandra VASLON</p><p className="mute" style={{ marginTop: 8, maxWidth: "34ch" }}>Développeuse full-stack bilingue.</p></div>
        <nav aria-label="Pied de page">
          <a href="https://www.linkedin.com/in/cassandra-vaslon/">LinkedIn <ArrowUpRight size={12} /></a>
          {/* <a href="#">GitHub <ArrowUpRight size={12} /></a> */}
        </nav>
      </div>
      <div className="bar"><span>© 2026 Cassandra VASLON</span><a href="#">Retour en haut <ArrowUp size={12} /></a></div>
    </div></footer>
  );
}