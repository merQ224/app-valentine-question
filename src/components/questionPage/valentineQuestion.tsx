import { useCallback, useState } from "react";
import type { ValentineQuestionModel } from "../../model/valentineQuestionModel";
import './valentineQuestion.css'

export const ValentineQuestion = ({ yesScale, acceptOnlyChoice, shouldDodge, rejectMsg, handleNoClick, handleYesClick }: ValentineQuestionModel) => {
    const [noStyle, setNoStyle] = useState<React.CSSProperties>({});

    const moveButtonNo = useCallback(() => {
        const x = Math.random() * 300 - 150;
        const y = Math.random() * 150 - 75;
        setNoStyle({ transform: `translate(${x}px, ${y}px)` });
    }, []);

    const onNoClick = useCallback(() => {
        handleNoClick();
        if (shouldDodge) moveButtonNo();
    }, [handleNoClick, shouldDodge, moveButtonNo]);

    return (
        <div className="valentine-container">
            <h1>Will you be my Valentine?</h1>

            <div className="reject-message">
                {rejectMsg}
            </div>

            <div className="valentine-buttons">
                <button
                    className="yes-button"
                    onClick={handleYesClick}
                    style={{ transform: `scale(${yesScale})` }}
                >
                    Yes
                </button>
                {acceptOnlyChoice && (
                    <button
                        className="no-button"
                        onClick={onNoClick}
                        onMouseMove={shouldDodge ? moveButtonNo : undefined}
                        onTouchStart={shouldDodge ? moveButtonNo : undefined}
                        style={noStyle}
                    >
                        No
                    </button>
                )}
            </div>
        </div>
    );
};