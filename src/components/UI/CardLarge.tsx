import React from 'react';
import "../stylesheets/components/UI/cardLarge.scss"


type Props = {
    className?: string
    children: React.ReactNode
}


function CardLarge({className,children}:Props) {
    return (
        <div className={"feature__card " + className}>
            {children}
        </div>
    );
}

export default CardLarge;
