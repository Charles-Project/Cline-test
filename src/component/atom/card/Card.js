import React, {useContext} from 'react';
import { AuthContext } from "../../../context/AuthContext"
import "./style.scss";


function Card({content1, content2, header, title, icon}) {
    const { sname } = useContext(AuthContext);
    return (
        <div className="card_wrapper">
            <div className="card__header--wrapper">
                <div className="icon__wrapper">
                <img src={icon} alt="lion"/>
                </div>
                <h5 className="title">{title}</h5>
            </div>

            <div className="card__content">
                <h3 className="card__content--title">
                   {header}
                </h3>

                <p>
                    {content1}
                </p>
               {content2 ? ( <p>
                  {content2}
                </p>): null}
            </div>

            <div className="comment__wrapper">
                <h6 className="repost__share">
                    Repost <span className="dot"></span><span>Share</span>
                </h6>
                <div className="comment">
                    <div className="circle__comment">{sname}</div>
                    <input type="text" placeholder="Add a comment"/>
                </div>
            </div>

        </div>
    )
}

export default Card
