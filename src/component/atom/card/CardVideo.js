import React from 'react'
import { FaYoutube } from "react-icons/fa";
import background from "../../../imgs/rightpic.png"

function CardVideo() {
 return (
        <div className="card_wrapper margin__top">
            <div className="card__header--wrapper p20">
                <div className="icon__wrappers">
                <FaYoutube />
                </div>
                <h5 className="title">Youtube</h5>
            </div>
            <div className="card__image">
                <img src={ background} alt="backgroud"/>
            </div>

        </div>
    )
}

export default CardVideo
