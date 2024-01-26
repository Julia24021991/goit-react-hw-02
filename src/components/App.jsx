import { useState, useEffect } from "react";
import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";
import { Notification } from "./Notification/Notification";


export const App = () => {
    const getFeedbackLocal = () => {
        const saveFeedback = window.localStorage.getItem("saveFeedback");
        if (saveFeedback === null) {
            return {
                good: 0,
                neutral: 0,
                bad: 0
            };
        }
        return JSON.parse(saveFeedback);
    };

    const getClickLocal = () => {
        const saveClick = window.localStorage.getItem("saveClick");
        if (saveClick === null) {
            return 0;
        }
        return JSON.parse(saveClick);
    };

    const [feedback, setFeedback] = useState(getFeedbackLocal);

    const [click, setClick] = useState(getClickLocal);

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

    useEffect(() => {
        window.localStorage.setItem("saveFeedback", JSON.stringify(feedback));
        window.localStorage.setItem("saveClick", click);
    }, [feedback, click]);

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