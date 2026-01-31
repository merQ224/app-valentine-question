import { useState } from "react";
import type { ValentineQuestionModel } from "../../model/valentineQuestionModel";
import './valentineQuestion.css'

/*
* Face: Displays a Valentine's Day query with interactive buttons.
*/

export const ValentineQuestion = ({ yesScale, acceptOnlyChoice, shouldDodge, handleNoClick, handleYesClick}: ValentineQuestionModel) => {
    const [noStyle, setNoStyle] = useState<React.CSSProperties>({});

    const moveButtonNo = () => {
        const x = Math.random() * 300 - 150; // This keeps the button within a reasonable horizontal range
        const y = Math.random() * 150 - 75; // This keeps the button within a reasonable vertical range
        setNoStyle({ transform: `translate(${x}px, ${y}px)` });
    }
    return (
        <div className = "valentine-container">
            <h1>Will you be my Valentine?</h1>

            <div className = "valentine-buttons">
                <button 
                    className = "yes-button"
                    onClick={handleYesClick}
                    style={{ transform: `scale(${yesScale})` }}
                    >
                        Yes
                </button>
                {acceptOnlyChoice && (
                    <button 
                        className = "no-button" 
                        onMouseMove={shouldDodge ? moveButtonNo : undefined}
                        onClick={() => {
                            handleNoClick();
                            if (shouldDodge) moveButtonNo();
                        }}
                        style={noStyle}
                        >
                            No
                    </button>
                )}
            </div>
        </div>
    );
};