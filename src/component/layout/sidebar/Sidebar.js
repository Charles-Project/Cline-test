import React, {useContext} from 'react'
import { FaGoogle, FaYoutube, } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthContext"

import khan from "../../../imgs/khan.png";
import lion from "../../../imgs/lionicon.png";
import twist from "../../../imgs/twisticon.png";
import wikipedia from "../../../imgs/wikipedia.png";


import "./style.scss"

function Sidebar() {
    const { open } = useContext(AuthContext);

    return (
        <div className={open ? "sidebar__wrapper open": "sidebar__wrapper"}>
            <div className="sidebar__all">
                <h5>All <span>34 results</span></h5>
            </div>

            <ul className="sidebar__container">
                <a href="/">Images</a>
                <a href="/">Videos</a>
            </ul>

            <div className="sources__wrapper">
                <h6>Sources</h6>
                <ul>
                    <a href="/"><img src={twist} alt="lion"/> Edtwist</a>
                    <a href="/"><span><FaYoutube /></span> Youtube</a>
                    <a href="/"><span><FaGoogle /></span> Google</a>
                    <a href="/"><img src={wikipedia} alt="wiki"/> New York Public Library</a>
                    <a href="/"><img src={khan} alt="khan"/>Khan Academy</a>
                    <a href="/"><img src={lion} alt="lion"/> New York Public Library</a>
                 
                </ul>

            </div>


        </div>
    )
}

export default Sidebar
