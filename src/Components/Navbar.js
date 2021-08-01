import React, {useState} from "react";
import './Navbar.css'
import {Reorder} from "@material-ui/icons";

function Navbar(){
    const [showLinks, setShowLinks] = useState(false);
    return (
        <div className="Navbar">
            <div className="leftSide">

                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}> <Reorder/> </button>

            </div>

            <div className="rightSide">
            </div>
        </div>
    )

}

export default Navbar;