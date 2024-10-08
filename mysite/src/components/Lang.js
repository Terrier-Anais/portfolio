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
      <div class="logo-slider">
        <div class="logo-container">
       
          <img src={html} alt="HTML" class="logo" />
          <img src={css} alt="CSS" class="logo" />
          <img src={js} alt="JavaScript" class="logo" />
          <img src={nodejs} alt="nodeJs" class="logo" />
          <img src={react} alt="React" class="logo" />
          <img src={express} alt="express" class="logo" />
          <img src={sql} alt="sql" class="logo" />
          <img src={postgresql} alt="postgresql" class="logo" />
          <img src={git} alt="git" class="logo" />
      
          <img src={html} alt="HTML" class="logo" />
          <img src={css} alt="CSS" class="logo" />
          <img src={js} alt="JavaScript" class="logo" />
          <img src={nodejs} alt="nodeJs" class="logo" />
          <img src={react} alt="React" class="logo" />
          <img src={express} alt="express" class="logo" />
          <img src={sql} alt="sql" class="logo" />
          <img src={postgresql} alt="postgresql" class="logo" />
          <img src={git} alt="git" class="logo" />
        </div>
      </div>
    </section>
  </div>
  
  );
}

export default Lang;
