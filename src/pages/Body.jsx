import React from "react";
import Contact from "../components/Contact";

const Body = () => {
  return (
    <React.Fragment>
      <div className="body-section">
        <div className="glob-section-one" id="accueil">
          <div className="section-one-title">
            <h2 id="parah2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              repudiandae mollitia ab illo inventore! Necessitatibus, alias
              quis. Quae,orumPerferendis, totam impedit odio incidunt laudantium
              eaque rerum nulla sed?
            </h2>
          </div>
          <div className="some-image-post">
            <img src="./icon11.jpg" alt="image" id="image-section-one" />
            <img src="./icon2.jpg" alt="image" id="image-section-one" />
            <img src="./icon12.jpg" alt="image" id="image-section-one" />
            <img src="./icon3.jpg" alt="image" id="image-section-one" />
            <img src="./icon2.jpg" alt="image" id="image-section-one" />
            <img src="./icon3.jpg" alt="image" id="image-section-one" />
            <img src="./icon2.jpg" alt="image" id="image-section-one" />
            <img src="./icon12.jpg" alt="image" id="image-section-one" />
            <img src="./icon3.jpg" alt="image" id="image-section-one" />
          </div>
        </div>

        <div className="glob-section-two" id="apropos">
          <div className="conten-section-two-left">
            <div className="some-texte1">
              <h1 id="title-texte1">Qui somme nous</h1>
              <p id="para-texte1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                odit sit id beatae laborum. Officia, id quae. Placeat iusto, in
                suscipit sapiente dolores modi illo minima, molestiae labore
                delectus inventore. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vero odit sit id beatae laborum. Officia, id
                quae. Placeat iusto, in suscipit sapiente dolores modi illo
                minima, molestiae labore delectus inventore.
              </p>
            </div>
            <div className="some-texte1">
              <h1 id="title-texte1">Nos compétences</h1>
              <p id="para-texte1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                odit sit id beatae laborum. Officia, id quae. Placeat iusto, in
                suscipit sapiente dolores modi illo minima, molestiae labore
                delectus inventore. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vero odit sit id beatae laborum. Officia, id
                quae. Placeat iusto, in suscipit sapiente dolores modi illo
                minima, molestiae labore delectus inventore.
              </p>
            </div>
            <div className="some-texte1">
              <h1 id="title-texte1">Nos objectifs et Mission</h1>
              <p id="para-texte1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                odit sit id beatae laborum. Officia, id quae. Placeat iusto, in
                suscipit sapiente dolores modi illo minima, molestiae labore
                delectus inventore. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vero odit sit id beatae laborum. Officia, id
                quae. Placeat iusto, in suscipit sapiente dolores modi illo
                minima, molestiae labore delectus inventore.
              </p>
            </div>
          </div>
        </div>
        <div className="glob-section-tree" id="contact">
          <img src="./contact2.jpg" alt="image" id="image-section-tree" />
          <div className="fomulaire">
            <Contact />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Body;
