import React from "react";

const Navbar = ({ targetY, section1, section2, section3 }) => {
  return (
    <React.Fragment>
      <div className="Navbar-section">
        <div className="sous-navbar">
          <div className="sous-navbar-left">
            <img src="./icon2.jpg" alt="image.png" id="img1" />
            {/* <img src="./menu.png" alt="image.png" id="img2"/> */}
          </div>
          <div className="content-milieu">
            <ul className="content-list-glob">
              <li id="li" onClick={() => targetY(section1)}>
                Accueil
              </li>
              <li id="li" onClick={() => targetY(section2)}>
                A propos
              </li>
              <li id="li" onClick={() => targetY(section3)}>
                Contact
              </li>

              <div className="button-rigth">
                <button id="btn1-rigth">Log in</button>
                <button id="btn2-rigth">Sign up</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Navbar;
