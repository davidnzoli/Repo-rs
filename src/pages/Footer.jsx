import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";

const Footer = () =>{
    const [state,setState] = useState(true);
    const scroll = ()=>{
        window.scrollTo(
            {
                top:"0",
                left:"0",
                behavior:"smooth"
            }
        )
    }
    window.addEventListener('scroll', () =>{
        console.log("talle")
    })
    return <React.Fragment>
        <div className="Footer-section">
            <div className="one-blog">
                <div className="one-blog-content">
                    <div className="para-ancre">
                        <h1 id="title-one-blog">A propos</h1>
                        <p id="para-one-blog " className="over"><a id="h" href="#apropos">Qui somme nous</a></p>
                        <p id="para-one-blog " className="over"><a href="#apropos">Nos compétences</a></p>
                        <p id="para-one-blog " className="over"><a href="#apropos">Nos objectifs et Mission</a></p>
                    </div>
                    <div className="para-sponsor">
                        <p id="para-sposor">Comminuty Apper-z</p>
                        <p id="para-sposor">Find solution</p>
                        <p id="para-sposor" >Gaz power</p>
                    </div>
                </div>
                <div className="one-blog-content sociaux">
                    <div className="one-blog-content-sociaux">
                        <h1 id="title-one-blog">Contact</h1>
                        <p id="para-one-blog">Facebook</p>
                        <p id="para-one-blog">Message</p>
                        <p id="para-one-blog">Twitter</p>
                        <p id="para-one-blog">Télégram</p>
                    </div>
                    <div className="some-texte-sociaux">
                        <p id="para-sociaux">
                            Contactez nous sur le réseaux sociaux
                            on est à la disponibilité de tout le monde.
                            Vous avez besoin de nous vous n'avez qu'à nous écrire.
                        </p>
                    </div>
                </div>
                <div className="one-blog-content">
                    <div id="reseaux"> 
                        <h1 id="title-one-blog">Réseaux</h1>
                        <img src="./telegram.png" alt="icon" id="image-one-blog" />
                        <img src="./twiter.png" alt="icon" id="image-one-blog" />
                        <img src="./opera.png" alt="icon" id="image-one-blog" />
                        <img src="./link.png" alt="icon" id="image-one-blog" />
                    </div>
                    <div className="local">
                        <p id="para-local" className="title">
                            <img src="./telephone.png" alt="img"/>
                            LOCALISATION
                            <img id="btn-defile" 
                            onClick={(state === true ? scroll : setState(false))}
                            src="./defil2.png" alt="icon" />
                        </p>
                        <p id="para-local">
                            Nord-kivu, Q/Kasika
                        </p>
                        <p id="para-local">
                            Av/Mbati,
                            route principale SAKE
                        </p>
                    </div>
                </div>
            </div>
            <div className="copirigth">
                <h2 id="para-copy">
                    Copyright 2023 tout droit réservé <sup style={{
                        fontFamily:"initial",
                        letterSpacing:"2px"
                    }}>Draft</sup>
                </h2>
                <div className="ancre-pop">
                    <a href="#accueil" id="ancre2">ACCUEIL</a>
                    <a href="#apropos" id="ancre2">A PROPOS</a>
                    <a href="#contact" id="ancre2">CONTACT</a>
                    </div>
            </div>
        </div>
    </React.Fragment>
}
export default Footer;