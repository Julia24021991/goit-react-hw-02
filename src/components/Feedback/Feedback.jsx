
export const Feedback = ({ feedback, onTotalFeedback, onPositiveFeedback }) => {

    return (
        <div>
            <ul>
                <li>Good:{feedback.good}
                </li>
                <li>Neutral:{feedback.neutral}</li>
                <li>Bad:{feedback.bad}</li>
                <li>Total:{onTotalFeedback}</li>
                <li>Positive:{onPositiveFeedback}%</li>
            </ul>
        </div>
    )
}