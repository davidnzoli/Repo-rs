import React, { useEffect, useRef, useState } from "react";
import Contact from "../components/Contact";
import Navbar from "./Navbar";
import Button from "../components/Button";

const Body = () => {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();

  const targetY = (reference) => {
    window.scrollTo({
      top: reference.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [getvisible, setvisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", scroll);

    function scroll() {
      if (window.scrollY < 500 || window.scrollY > 1721) {
        setvisible(false);
      } else {
        setvisible(true);
      }
      return () => {
        window.removeEventListener("scroll", scroll);
      };
    }
  }, []);
  return (
    <React.Fragment>
      <div className="body-section">
        {getvisible && <Button />}
        <div className="glob-section-one" id="accueil" ref={section1}>
          <div className="section-one-title">
            <h2 id="parah2">
              Lorem ipsum <span> dolor nulla sed?</span> sit amet adipisicing
              elit. <span>consectetur Placeat eaque</span> rerum
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

        <div className="glob-section-two" id="apropos" ref={section2}>
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
        <div className="glob-section-tree" id="contact" ref={section3}>
          <img src="./contact2.jpg" alt="image" id="image-section-tree" />
          <div className="fomulaire">
            <Contact />
          </div>
        </div>
        <Navbar
          targetY={targetY}
          section1={section1}
          section2={section2}
          section3={section3}
        />
      </div>
    </React.Fragment>
  );
};
export default Body;
