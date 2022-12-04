import React, {useEffect, useRef} from "react";

const GrowingCircleAnimation = () => {
    const canvasRef = useRef(null);

    const draw = (ctx, radius) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#00F";
        ctx.beginPath();
        ctx.arc(50, 100, radius, 0, 2 * Math.PI);
        ctx.fill();
    };

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        let radius = 0;
        let animationFrameId;

        const render = () => {
            radius += 0.05;
            draw(context, radius);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);

    return <canvas ref={canvasRef} />;
};

export default GrowingCircleAnimation;
