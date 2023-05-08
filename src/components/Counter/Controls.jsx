import React from "react";
import css from "./counter.module.css"



const Controls = ({onIncrement}) => (
    // const { good, neutral, bad } = state;
    <div className={css.counter__controls}>
        <button type="button" name="good" className={css.button} onClick={onIncrement}>Good</button>
        <button type="button" name="neutral" className={css.button} onClick={onIncrement}>Neutral</button>
        <button type="button" name="bad" className={css.button} onClick={onIncrement}>Bad</button>
    </div>
);

export default Controls;