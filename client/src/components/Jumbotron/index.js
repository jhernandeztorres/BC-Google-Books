import React from "react";
import Style from "./style.css";

function Jumbotron({children}){
    return (
        <div className="jumbotron">{children}</div>
    )
}

export default Jumbotron;