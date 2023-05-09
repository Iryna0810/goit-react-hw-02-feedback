import React from "react";
import css from "../feedback.module.css"

 export const FeedbackOptions = ({onLeaveFeedback}) => (
    <div className={css.counter__controls}>
        <button type="button" name="good" className={css.button} onClick={onLeaveFeedback}>Good</button>
        <button type="button" name="neutral" className={css.button} onClick={onLeaveFeedback}>Neutral</button>
        <button type="button" name="bad" className={css.button} onClick={onLeaveFeedback}>Bad</button>
    </div>
);

