import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import BeerApp from "./components/BeerApp";
const app = document.getElementById("app");

ReactDOM.render(<BeerApp /> , app);