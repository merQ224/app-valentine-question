import { useEffect } from "react";
import confetti from "canvas-confetti";

export const HeartConfetti = () => {
    useEffect(() => {
        const duration = 5000; // miliseconds
        const end = Date.now() + duration;

        const interval = setInterval(() => {
            if (Date.now() > end) {
                clearInterval(interval);
                return;
            }

            // left confetti
            confetti({
                particleCount: 10,
                angle: 45,
                spread: 55,
                origin: { x: 0 },
                shapes: ['circle'],
                colors: ['#ff0000', '#ff69b4', '#ff1493']
            });

            // right confetti
            confetti({
                particleCount: 10,
                angle: 140,
                spread: 55,
                origin: { x: 1, y: 0.4 },
                shapes: ['circle'],
                colors: ['#ff0000', '#ff69b4', '#ff1493']
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return null;
}