import React from "react";
import "./ShouldHave.css";

function ShouldHave () {
    return <div className="should-have">
        
        <div className="should-have-1"> 
            <div className="mi-rectangulo"></div> 
            <h2 style={{textAlign:"left"}}>Why should you have a cat?</h2> 
            <p style={{textAlign:"justify"}}>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
            <div><a href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=Owning%20a%20cat%20can%20bring,Lundgren%20and%20Robert%20Segal%2C%20M.A.">READ MORE <img src="../images/arrow-right-alt_117700.svg" alt="" /></a> </div>
        </div>
        <div className="should-have-2">
            <div>
                <div>
                    <img className="image-2" src="../images/image 2.png" alt="" />
                </div>
                <div style={{marginTop:"9px"}}>
                    <img className="image-1" src="../images/image 1.png" alt="" />
                </div>
                
                
            </div>
            <div>
                <img className="image-3" src="../images/image 3.png" alt="" />
            </div>
            
        </div>
    </div>
}

export default ShouldHave;