import React from "react";


const Header = (props) => (
    <div className = "header">
        <div className = "container">
            <h1 className="header__title">{props.title}</h1>
            <h2 className="header__subtitle">{props.subtitle}</h2>
        </div> 

    </div>
);

Header.defaultProps = {
    title: "Our beer selection ",
    subtitle: "Take a look, you will surely find something you'll fall in love with!"
}

export default Header;