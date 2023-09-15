import React from "react";

const Contact = ()=>{
    return(
        <div className="formulaire">
            <input type="text" id="input" placeholder="Adress mail" autoFocus />
            <textarea id="text-area" placeholder="Message"/>
            <button id="btn-contact">Envoyer</button>
        </div>
    )
}
export default Contact; 