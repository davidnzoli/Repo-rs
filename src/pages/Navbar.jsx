import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () =>{
    return <React.Fragment>
        <div className="Navbar-section">
            <div className="sous-navbar">
                <div className="sous-navbar-left">
                    <img src="./icon2.jpg" alt="image.png" id="img1"/>
                    <img src="./menu.png" alt="image.png" id="img2"/>
                </div>
            <div className="content-milieu">
                <ul className="content-list-glob">
                    <li id="li"><a href="#accueil" id="ancre">Accueil</a></li>
                    <li id="li"><a href="#apropos" id="ancre">A propos</a></li>
                    <li id="li"><a href="#contact" id="ancre">Contact</a></li>

                <div className="button-rigth">
                    <button id="btn1-rigth">Log in</button>
                    <button id="btn2-rigth">Sign up</button>
                </div>
                </ul>
               
            </div>
        </div>
        </div>
    </React.Fragment>
}
export default Navbar;