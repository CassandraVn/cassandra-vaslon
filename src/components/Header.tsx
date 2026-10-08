import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  // TODO add back project when done
  // ["Projet", "#projet"],
  ["Expériences", "#parcours"],
  ["Compétences", "#competences"],
  ["Formations", "#education"],
  ["Contact", "#contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 900px)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a href="#" className="logo" onClick={close}><i>CV</i>Cassandra VASLON</a>

        <nav className="links" aria-label="Navigation principale">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <button
          className="menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "FERMER" : "MENU"} {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      <div id="mobile-menu" className={`drawer${open ? " open" : ""}`}>
        <nav className="wrap" aria-label="Menu mobile">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
          <a href="#contact" className="btn" onClick={close}>
            Me contacter <ArrowUpRight size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}