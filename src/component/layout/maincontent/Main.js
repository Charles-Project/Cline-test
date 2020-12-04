import React from 'react'
import background from "../../../imgs/background.png"
import {Card, CardVideo} from "../../"
import "./style.css"
import Lion from "../../../imgs/lion.png"
import Leaf from "../../../imgs/leaf.png"

function Main() {

    const content1 = `kaplan, a well-known figure in the computer industry, 
                    founded GO Corporation in 1987, and for several years
                    it was one of the hottest new ventures in the Valley.`;
    const content2 = `
    startup tells the story of Kaplan's wild ride: how he assembled
                    a brilliant but fractious team of engineers, softwares designers, 
                    and investors; pioneered the emerging market for hand held
                    computers operated with a pen instead of a keyboard; and careened from 
                    crisis to crisis without ever losing his passion for a revolutionary idea.
    `
    const header = `a Silicon Valley adventure`;
    const title = `New York Public Library`;

    const content3 = `The other possibility is that tilt doesn't give a shit
                    about me since i am a man over the age of 37. Its those darn 
                    millenials, raised on shrieking commercials and brain-rotting
                    soda pop, that they wish to woo`;
  
    const header1 = `Late night ideas`;
    const title1 = `Khan Academy`;


    return (
        <div className="main__wrapper">
            <div className="main__wrapper--left">
                <div className="search__wrapper">
                  <div className="search">
                    <h3 className="title">Search</h3>
                    <p className="content">
                        Your home base for all your resources
                    </p>
                    <div className="tour__wrapper">
                        <button className="btn__tour">Tour</button>
                        <p>Got it</p>
                    </div>

                  </div>

                  <div className="search__img">
                    <img src={background} alt="background"/>
                  </div>
                </div>

                <Card content1={content1} content2={content2}
                header={header} title={title} icon={Lion}/>
                
            </div>
            <div className="main__wrapper--right">
                <Card content1={content3}
                header={header1} title={title1} icon={Leaf}/>

                <CardVideo/>
            </div>
        </div>
    )
}

export default Main
