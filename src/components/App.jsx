import { useState } from "react";
import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";
import { Notification } from "./Notification/Notification";


export const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });
    const [click, setClick] = useState(0);

    const handleFeedback = (type) => {
        setFeedback({
            ...feedback,
            [type]: feedback[type] + 1
        });
        setClick(click + 1);
    };

    const onReset = () => {
        setFeedback({
            ...feedback,
            good: 0,
            neutral: 0,
            bad: 0
        });
        setClick(0);
    };
    const isHidden = click === 0;

    const onTotalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const onPositiveFeedback = Math.round(((feedback.good + feedback.neutral) / onTotalFeedback) * 100);

    return (
        <div>
            <Description />
            <Options onUpdate={handleFeedback} onReset={onReset} isHidden={isHidden} />

            {!isHidden ? <Feedback feedback={feedback} onTotalFeedback={onTotalFeedback} onPositiveFeedback={onPositiveFeedback} /> : <Notification />}

        </div>
    );
};