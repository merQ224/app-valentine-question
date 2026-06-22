import { useEffect } from "react";
import confetti from "canvas-confetti";

const DURATION_MS = 5000;
const TICK_MS = 150;
const HEART_COLORS = ['#ff0000', '#ff69b4', '#ff1493'];

export const HeartConfetti = () => {
    useEffect(() => {
        const end = Date.now() + DURATION_MS;

        const interval = setInterval(() => {
            if (Date.now() > end) {
                clearInterval(interval);
                return;
            }

            confetti({
                particleCount: 10,
                angle: 45,
                spread: 55,
                origin: { x: 0 },
                shapes: ['circle'],
                colors: HEART_COLORS,
            });

            confetti({
                particleCount: 10,
                angle: 140,
                spread: 55,
                origin: { x: 1, y: 0.4 },
                shapes: ['circle'],
                colors: HEART_COLORS,
            });
        }, TICK_MS);

        return () => clearInterval(interval);
    }, []);

    return null;
}