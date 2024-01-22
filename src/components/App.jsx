import { Description } from "./Description/Description"
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback"

export const App = () => {
    // const [feedback, setFeedback] = useState({
    //     good: 0,
    //     neutral: 0,
    //     bad: 0
    // });


    return (
        <>
            <Description />
            <Options />
            <Feedback />
        </>
    );
};
