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
                "À la recherche d'un poste dans le développement web, je suis autonome, polyvalente et très motivée pour relever de nouveaux défis."
                </p>
            </div>
        </div>
        <img className="pictureMe" src={pictureOfProfil} alt="my face" />
    </header>
    );
}

export default Intro;