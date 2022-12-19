import React from 'react';
import {motion} from "framer-motion";
import "../stylesheets/components/UI/BubbleAnimation.scss"

type Props = {
    className?: string
    imageUrl?: string,
    show?: boolean,
    children?: React.ReactNode
}

const scaleAnimation = {
    offScale: {scale: 0,opacity:0.9}, onScale: {
        scale: 3.5,
        opacity: 1
    }
};

const BubbleAnimation = ({className, show, imageUrl,children}: Props) => {

    return (<motion.div className={"bubble-animation " + className}
                        animate={show ? scaleAnimation.onScale : scaleAnimation.offScale} transition={{
        default: {ease: "linear"}, duration: 3.8,
    }}>
        {imageUrl && <img src={imageUrl} alt=""/>}
        {children}
    </motion.div>);
}

export default BubbleAnimation;
