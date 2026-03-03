import { useState } from "react";
import type { ValentineQuestionModel } from "../../model/valentineQuestionModel";
import './valentineQuestion.css'

/*
* Displays a Valentine's Day query with interactive buttons.
*/

export const ValentineQuestion = (request: ValentineQuestionModel) => {
    const [noStyle, setNoStyle] = useState<React.CSSProperties>({});

    const moveButtonNo = () => {
        const x = Math.random() * 300 - 150; // horizontal range
        const y = Math.random() * 150 - 75; // vertical range
        setNoStyle({ transform: `translate(${x}px, ${y}px)` });
    }
    return (
        <div className = "valentine-container">
            <h1>Will you be my Valentine?</h1>

            <div className = "reject-message">
                {request.rejectMsg}
            </div>

            <div className = "valentine-buttons">
                <button 
                    className = "yes-button"
                    onClick={request.handleYesClick}
                    style={{ transform: `scale(${request.yesScale})` }}
                    >
                        Yes
                </button>
                {request.acceptOnlyChoice && (
                    <button 
                        className = "no-button" 
                        onClick={() => {
                            request.handleNoClick();
                            if (request.shouldDodge) {
                                moveButtonNo()
                            };
                        }}
                        onMouseMove={request.shouldDodge ? moveButtonNo : undefined}
                        onTouchStart={request.shouldDodge ? moveButtonNo : undefined}
                        style={noStyle}
                        >
                            No
                    </button>
                )}
            </div>
        </div>
    );
};