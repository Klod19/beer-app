import React from "react";
import Modal from "react-modal";


const BeerModal = (props) => (
    <Modal

        isOpen = {!!props.modalOpen}
        onRequestClose = {props.handleCloseModal}
        contentLabel = "Selected Option"
        closeTimeoutMS = {200}
        className = "modal"
    >
        <h3 className="modal__title">{props.chosenBeerName}</h3>
        <div className="beer-modal-info">
            <p>ABV</p>
            <p>{props.chosenBeerABV} %</p>
        </div>
        <div className="beer-modal-info">
            <p>IBU</p>
            <p>{props.chosenBeerIBU}</p>
        </div>
        <div className="beer-modal-info">
            <p>Year</p>
            <p>{props.chosenBeerYear}</p>
        </div>
        <div className="beer-modal-info">
            <p>Is this beer organic?</p>
            <p>{props.chosenBeerIsOrganic === "N" ? "No" : "Yes"}</p>
        </div>
        <div className="beer-modal-info">
            <p>Status</p>
            <p>{props.chosenBeerStatus}</p>
        </div>
        <div className="beer-modal-info">
            <p>Glass</p>
            <p>{props.chosenBeerGlass}</p>
        </div>
        <div className="beer-modal-info-label">
            <p>Label</p>
            <p>{props.chosenBeerLabel==="not available" ? "not available" : <img src={props.chosenBeerLabel} alt="beer_label" className="label"/>}</p>
        </div>

        <button className="button modal-button" onClick = {props.handleCloseModal}>Close</button> 
    </Modal>
);

export default BeerModal;
