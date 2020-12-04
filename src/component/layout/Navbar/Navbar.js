import React, {useState, useContext} from 'react'
import { FaSearch } from "react-icons/fa";
import twist from "../../../imgs/twist.png"
import zig from "../../../imgs/zig.png"
import { AuthContext } from "../../../context/AuthContext"
import { useGoogleLogout } from 'react-google-login';

import {
  Tooltip,
} from 'react-tippy';
import 'react-tippy/dist/tippy.css'

import "./style.scss"


function Navbar({props}) {
    

    const [text, setText] = useState("Generation Y")
    // -------------useContext-----------------------------
    const { open, setOpen, sname } = useContext(AuthContext);

    const clientId = `${process.env.REACT_APP_GOOGLEID}`
    // ---------------method--------------------------
    const handlerChange = (e) => {
        setText(e.target.value)
    }

    const onLogoutSuccess = (res) => {
        localStorage.removeItem("tokens");
        localStorage.removeItem("name");
        props.history.push("/");
    };

    const onFailure = () => {
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

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
                <Tooltip
                    title="Logout"
                    position="top"
                    size="small"
                    >
                  <div className="circle__icons bg__black" onClick={signOut}>{sname}</div>
                </Tooltip>
          
            </div>
        </div>
    )
}

export default Navbar
