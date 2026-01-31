import { useState } from "react";

/*
* Brains: Hook to manage the state logic for when user interacts with the Valentine buttons.
*/
const MAX_CLICKS = 5;
const DODGE = 3;
const INCREMENT_SCALE = 0.3;

export const useValentineState = () => {
    const [noCount, setNoCount] = useState<number>(0);
    const [hasAccepted, setHasAccepted] = useState<boolean>(false);

    const handleNoClick = () => {
        setNoCount((prev) => prev + 1);
    };

    const handleYesClick = () => {
        setHasAccepted(true);
    };

    // Derived states
    const yesScale = 1 + noCount * INCREMENT_SCALE;
    const shouldDodge = noCount >= DODGE;
    const acceptOnlyChoice = noCount < MAX_CLICKS;

    return {
        noCount,
        hasAccepted,
        yesScale,
        shouldDodge,
        acceptOnlyChoice,
        handleNoClick,
        handleYesClick,
    };
};