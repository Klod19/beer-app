import React from "react";
import Header from "./Header";
import Beers from "./Beers";
import BeerModal from "./BeerModal";
import BeersList from "./BeersList";
import ScrollupButton from "./ScrollupButton";


export default class IndecisionApp extends React.Component {
    state = {
        beersList: BeersList.data,
        modalOpen : false,
        chosenBeerName : undefined,
        chosenBeerABV : undefined,
        chosenBeerIBU : undefined,
        chosenBeerIsOrganic : undefined,
        chosenBeerLabel : undefined,
        chosenBeerYear : undefined,
        chosenBeerStatus : undefined,
        chosenBeerGlass : undefined,
    }

    chooseBeer = (chosenBeerName, chosenBeerABV, chosenBeerIBU, chosenBeerIsOrganic, chosenBeerLabel, chosenBeerYear, chosenBeerStatus, chosenBeerGlass) => {
        this.setState( () => ({
            chosenBeerName : chosenBeerName,
            chosenBeerABV : chosenBeerABV,
            chosenBeerIBU : chosenBeerIBU,
            chosenBeerIsOrganic : chosenBeerIsOrganic,
            chosenBeerLabel : chosenBeerLabel,
            chosenBeerYear : chosenBeerYear,
            chosenBeerStatus : chosenBeerStatus,
            chosenBeerGlass : chosenBeerGlass,
            modalOpen:true
        }))

    }

    searchBeer = (event) => {
        event.preventDefault();
        const input = event.target.elements.option_input.value.trim();
        const newBeersList = this.state.beersList.filter( (beer) => beer.name.toLowerCase().includes(input.toLowerCase()));
        console.log(newBeersList);
        this.setState(prevState);

        this.setState( ()=> ({
            beersList : newBeersList
        }))
    }

    handleCloseModal = () => {
        this.setState( () => ({
            modalOpen: false
        }));
    };
  
    

    render(){
        return(
            <div>
                <Header/>
                

                <div className = "container">
                    <div className = "widget">
                        <Beers
                            beers = {this.state.beersList}
                            chooseBeer = {this.chooseBeer}
                        />
                    </div>   
                </div>

                <BeerModal
                    chosenBeerName = {this.state.chosenBeerName}
                    chosenBeerABV = {this.state.chosenBeerABV}
                    chosenBeerIBU = {this.state.chosenBeerIBU}
                    chosenBeerIsOrganic = {this.state.chosenBeerIsOrganic}
                    chosenBeerLabel = {this.state.chosenBeerLabel}
                    chosenBeerYear = {this.state.chosenBeerYear}
                    chosenBeerStatus = {this.state.chosenBeerStatus}
                    chosenBeerGlass = {this.state.chosenBeerGlass}
                    chosenBeer = {this.state.chosenBeer}
                    modalOpen = {this.state.modalOpen}
                    handleCloseModal = {this.handleCloseModal}
                />

                <ScrollupButton />
            </div>
        )    
    }
}


