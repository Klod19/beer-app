import React from "react";
import Beer from "./Beer"

const Beers = (props) => (
    <div>
        <div className = "widget-header">
            <div className="beer-name-container">
                <div className="beer__text"><b>BEER</b></div>
            </div>
            <div className="beer-info-container">
                <div className="beer__info abv__info">ABV</div>
                <div className="beer__info">IBU</div>
            </div>
        </div>
        {
            props.beers.map( (beer) => 
                <Beer
                    key={beer.name} 
                    beerName={beer.name}
                    beerABV={beer.abv ? beer.abv : beer.style.abvMin + " - " + beer.style.abvMax }
                    beerIBU={beer.ibu ? beer.ibu : (beer.style && beer.style.ibuMin && beer.style.ibuMax ? beer.style.ibuMin + " - " + beer.style.ibuMax : "-" )}
                    isOrganic={beer.isOrganic}
                    label={beer.labels ? (beer.labels.contentAwareMedium ? beer.labels.contentAwareMedium : beer.labels.medium) : "not available"}
                    year={beer.createDate ? beer.createDate.substring(0, 4) : "not available"}
                    status={beer.statusDisplay}
                    glass={beer.glass ? beer.glass.name : "not available"}
                    chooseBeer={props.chooseBeer}
                />
            )
        }
    </div>
);

export default Beers;