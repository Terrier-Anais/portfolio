import React from 'react';
import pictureOfProfil from "../photo.jpg";
import '../App.css'; 

function Intro(){
    return(
        <header>
        <div className="profil">
            <h1>Développeuse Web Full Stack</h1>
            <div className="name">
                <p>Terrier Anaïs</p>
            </div>
            <div className="introduce">
                <p>
                "En préparation d’une formation CDA, je recherche une alternance d’un an pour approfondir mes compétences en développement web. Curieuse, adaptable et impliquée, je suis prête à m’investir dans des projets concrets et ambitieux"
                </p>
            </div>
        </div>
        <img className="pictureMe" src={pictureOfProfil} alt="my face" />
    </header>
    );
}

export default Intro;