import React from "react";
import "./Bottom.css"
import { v4 as uuidv4 } from 'uuid';

function Bottom () {
    const uniqueId = uuidv4();
    return <div className="bottom" id="boton">
        <div className="bottom-container">
            <div className="bottom-line">
                <a href="/"> <img src="../images/CatwikiLogo.svg" alt="" /> </a>
                

            

                <p>© created by <a href="https://github.com/Jesus-D-Rodriguez">Jesus David Rodriguez</a> - devchallenges.io 2023</p>
            </div>
            
        </div>
    </div>
}

export default Bottom;