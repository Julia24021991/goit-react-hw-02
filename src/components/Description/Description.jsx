import css from "./Description.module.css"

export const Description = () => {
    return (
        <div className="{description}">
            <h1 className={css.title}>Sip Happens Café</h1>
            <p className="titleDescription">Please leave your feedback about our service by selecting one of the options below.</p>
        </div>
    )
}