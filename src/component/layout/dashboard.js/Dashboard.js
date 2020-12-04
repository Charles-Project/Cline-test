import React from 'react'
import {Navbar, Sidebar, Main} from "../../"
import "./style.scss"

function Dashboard(props) {
    return (
        <div className="dashboard__container">
           <div className="dashboard__header">
            <Navbar props={props}/>
           </div>
           <div className="dashboard__content">
            <Sidebar />
            <Main />
           </div>
        </div>
    )
}

export default Dashboard
