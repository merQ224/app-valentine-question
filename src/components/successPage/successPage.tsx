import { HeartConfetti } from "./heartConfetti"
import "./successPage.css"

/*
* Displays success page once `Yes` button is clicked willfully.
*/

export const SuccessPage = () => {
    return (
        <div className = "success-container">
            <HeartConfetti />
            <div className="heart-bg">❤️</div>
            <h1 className="success-text">She said YES!</h1>
            <h3 className="success-text">Happy Valentine’s Day 😘 See you soon!</h3>
        </div>
    )
}