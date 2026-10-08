const rows = [
    ["Titre MS2D (Manager en Solutions Digitales et Datas)", "ENI Chartes-de-Bretagne", "2023-2024"], 
    ["Titre CDA (Conception Développement d'Applications)", "ENI Quimper", "2021-2023"], 
    ["POEC Java (Préparation Opérationnelle à l'Emploi Collective)", "ENI Quimper", "Mars 2021 à juin 2021"], 
    ["Licence d'Anglais, première et deuxième années", "UBO Brest", "2017-2021"]
];
export function Education() {
  return (
    <section style={{ background: "var(--paper)" }}><div className="wrap">
      <div className="head"><b>05</b><span>Formation + certifications</span></div>
      <div className="split">
        <h2 className="black">Un parcours construit dans la pratique.</h2>
        <ul className="edu">
          {rows.map(([t, s, y]) => <li key={t}><div><b>{t}</b><small className="mute">{s}</small></div><span className="mute">{y}</span></li>)}
        </ul>
      </div>
    </div></section>
  );
}