import React from 'react';
import linkedin from '../src/images/linkedin.png';
import github from '../src/images/github.png';
import "../index.css";
// import { Link } from 'react-router-dom';

function Footer() {
  return (
<footer>
        <div>
        <a href="https://www.linkedin.com/in/ana%C3%AFs-terrier-4bb026301/" target="_blank" rel="noopener noreferrer" class="lien-icone">
        <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/Terrier-Anais" target="_blank" rel="noopener noreferrer" class="lien-icone">
        <img src={github} alt="github" />
        </a>
        </div>
</footer>
  );
}

export default Footer;