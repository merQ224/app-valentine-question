import { HeartConfetti } from "./heartConfetti"
import "./successPage.css"

export const SuccessPage = () => {
    return (
        <div className = "success-container">
            <HeartConfetti />
            <h1>She said YES!</h1>
            <h3>Happy Valentine's Day ma chérie, see you soon.</h3>
        </div>
    )
}