import React from "react";
import { Link } from "react-router-dom"; // Import du composant Link
import "../proj.css"; // Ton fichier CSS

function Proj() {
  return (
    <section>
      <h3>Mes projets</h3>
      <section id="projets">
        <div className="wrapper">
          <div className="overlay">
            <h4>MTB REPAIR 74</h4>
            <p><small>Site vitrine d'un magasin de vélo</small></p>
            <article className="projet1">
            <a href="https://terrier-anais.github.io/mtb_repair_74/" className="button-2" target="_blank" rel="noopener noreferrer">
  Projet 1
</a>
            </article>
          </div>

          <div className="overlay">
            <h4>On the road again</h4>
            <p><small>Site de stockage de photo de voyage</small></p>
            <article className="projet2">
              <Link to="/" className="button-2">En cours ...</Link>
            </article>
          </div>
          {/* <div className="overlay">
            <h4>En cours</h4>
            <p><small>Site en construction</small></p>
            <article className="projet3">
              <Link to="/shopt" className="button-2">Projet 3</Link>
            </article>
          </div> */}
          {/* Suppression du doublon */}
        </div>
      </section>
    </section>
  );
}

export default Proj;
