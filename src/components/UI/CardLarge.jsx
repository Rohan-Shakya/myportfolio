import React from 'react';
import "../stylesheets/components/UI/cardLarge.scss"

function CardLarge(props) {
    return (
        <div className={"feature__card"}>
            {props.children}
        </div>
    );
}

export default CardLarge;
