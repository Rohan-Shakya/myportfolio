import React from 'react';
import "../stylesheets/components/UI/Card.scss"

function Card({className = '',children}) {
    return (
        <div className={"card " + className}>
            {children}
        </div>
    );
}

export default Card;
