// import css from "./Option.module.css"

export const Options = ({ onUpdate, onReset, isHidden }) => {
    return (
        <div><button onClick={() => onUpdate("good")} >Good</button>
            <button onClick={() => onUpdate("neutral")} >Neutral</button>
            <button onClick={() => onUpdate("bad")} >Bad</button>
            {!isHidden && <button onClick={onReset} >Reset</button>}
        </div>
    )
}
