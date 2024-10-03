import "../lang.css";
import html from "../src/images/html.png";
import js from "../src/images/js.png";
import css from "../src/images/css.png";
import react from "../src/images/react.png";
import express from "../src/images/express.png";
import git from "../src/images/git.png";
import nodejs from "../src/images/nodejs.png";
import postgresql from "../src/images/postgresql.png";
import sql from "../src/images/sql.png";


function Lang() {
  return (
    <div>
      <section>
        <h2>Mes Langages</h2>
        <div className="logo-slider">
          <img src={html} alt="HTML" className="logo" />
          <img src={css} alt="CSS" className="logo" />
          <img src={js} alt="JavaScript" className="logo" />
          <img src={nodejs} alt="nodeJs" className="logo" />
          <img src={react} alt="React" className="logo" />
          <img src={express} alt="express" className="logo" />
          <img src={sql} alt="sql" className="logo" />
          <img src={postgresql} alt="postgresql" className="logo" />
          <img src={git} alt="git" className="logo" />
        </div>
      </section>
    </div>
  );
}

export default Lang;
