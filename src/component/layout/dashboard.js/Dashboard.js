import React from 'react'
import {Navbar, Sidebar, Main} from "../../"
import "./style.scss"

function Dashboard() {
    return (
        <div className="dashboard__container">
           <div className="dashboard__header">
            <Navbar/>
           </div>
           <div className="dashboard__content">
            <Sidebar />
            <Main />
           </div>
        </div>
    )
}

export default Dashboard
