import { useState } from "react";
import css from "./Option.module.css"

const Button = () => {

}


export const Options = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const handleGoodClick = () => {
        setFeedback(() => {
            return {
                ...feedback,
                good: feedback.good + 1
            };
        });
    };

    const handleNeutralClick = () => {
        setFeedback(() => {
            return {
                ...feedback,
                neutral: feedback.neutral + 1
            };
        });
    };

    const handleBadClick = () => {
        setFeedback((feedback) => {
            return {
                ...feedback,
                bad: feedback.bad + 1
            };
        });
    };

    return (
        <div className={css.container}>
            <button onClick={handleGoodClick}>Good</button>
            <button onClick={handleNeutralClick}>Neutral</button>
            <button onClick={handleBadClick}>Bad</button>
        </div>
    );
};