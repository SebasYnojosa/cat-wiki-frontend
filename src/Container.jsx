import React from "react"
import "./Container.css"
import Top from "./Top.jsx"
import MainContainer from "./MainContainer";
import ShouldHave from "./ShouldHave";
import Bottom from "./Bottom";

function Container () {
    return (<div className="container">
        <div className="container-1">
            <Top></Top>
            <MainContainer></MainContainer>
        </div>
        <div className="container-2">
            <ShouldHave></ShouldHave>
            <Bottom></Bottom>
        </div>
    </div>);
}

export default Container;