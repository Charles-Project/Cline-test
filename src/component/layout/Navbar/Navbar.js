import React, {useState, useContext} from 'react'
import { FaSearch } from "react-icons/fa";
import twist from "../../../imgs/twist.png"
import zig from "../../../imgs/zig.png"
import { AuthContext } from "../../../context/AuthContext"

import "./style.scss"


function Navbar() {
    const [text, setText] = useState("Generation Y")
    // -------------useContext-----------------------------
    const { open, setOpen, sname } = useContext(AuthContext);

    // ---------------method--------------------------
    const handlerChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="navbar__wrapper">
            <div className="Navbar__logos">
                {/* ---------------------------------- */}
                  <div className={`menu-toggler ${open ? "open" : null}`}
                     onClick={() => setOpen(!open)}>
                        <div className="bar half start"></div>
                        <div className="bar"></div>
                     <div className="bar half end"></div>
                  </div>

                {/* ------------------------------------ */}

                 <div className="Navbar__logos--icons">
                     <img src={twist} alt="twist"/>
                 </div>
                 <div className="Navbar__logos--search">
                     <input type="text" value={text} onChange={handlerChange}/>
                     <span><FaSearch/></span>
                 </div>
                 <div className="Navbar__logos--help">Help</div>
            </div>
            <div className="Navbar__icons">
                <div className="normal__icons">
                    <img src={zig} alt="zig"/>
                </div>
                <div className="circle__icons bg__blue">+</div>
                <div className="circle__icons bg__black">{sname}</div>
            </div>
        </div>
    )
}

export default Navbar
