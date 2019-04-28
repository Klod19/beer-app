import React from "react";

const Beer = (props) => (
    <div className = "beer">
        <div className="beer-name-container">
            <p className="beer__text"><b>{props.beerName}</b></p>
            <p className="info-p">
                <span 
                    className="info-button"
                    onClick = { (event) => {
                        props.chooseBeer(props.beerName, props.beerABV, props.beerIBU, props.isOrganic, props.label, props.year, props.status, props.glass);
                        console.log(props.glass);
                        console.log(props.label);
                    }}
                >
                more info
                </span>
            </p>
        </div>
        <div className="beer-info-container">
            <div className="beer__info abv__info">{props.beerABV} %</div>
            <div className="beer__info">{props.beerIBU}</div>
        </div>
    </div>

);

export default Beer;