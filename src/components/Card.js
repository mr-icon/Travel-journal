import React from "react";
import locator from "../images/download.png";

function Card(props) {
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.item.image} alt="" className="img" />
            </div>
            <div className="card-content">
                <img src={locator} className="locator" />
                <span>{props.item.location}</span>
                <u className="card-link">View On Google Map</u>
                <h1 className="card-header">{props.item.title}</h1>
                <p className="card-p1">{props.item.date}</p>
                <p className="card-p2">{props.item.text}</p>
            </div>
        </div>
    )
}

export default Card;