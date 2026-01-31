import type { ValentineQuestionModel } from "../../model/valentineQuestionModel";
import '../questionPage/valentineQuestion.css'

/*
* Face: Displays a Valentine's Day query with interactive buttons.
*/

export const ValentineQuestion = ({ yesScale, acceptOnlyChoice, handleNoClick, handleYesClick}: ValentineQuestionModel) => {
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
                {acceptOnlyChoice && <button className = "no-button" onClick={handleNoClick}>No</button>}
            </div>
        </div>
    );
};