import { useState } from "react";

/*
* Brains: Hook to manage the state logic for when user interacts with the Valentine buttons.
*/
const MAX_CLICKS = 6;
const DODGE = 5;
const INCREMENT_SCALE = 0.3;
const REJECT_MSG = [
    "Looks like you misclicked 😏",
    "Are you sure? 🥺",
    "Seems to not work, try again 🫨",
    "Hmm, let me fix that for you 🤓",
    "Fixed it 😤"
]

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
    const rejectMsg = noCount > 0 ? REJECT_MSG[Math.min(noCount - 1, REJECT_MSG.length - 1)] : "";

    return {
        noCount,
        hasAccepted,
        yesScale,
        shouldDodge,
        acceptOnlyChoice,
        rejectMsg,
        handleNoClick,
        handleYesClick,
    };
};