import React, { Component } from "react";
import css from "./counter.module.css"


export class Statistics extends Component {
    
render() {
    const { good, neutral, bad, total, positiveFeedback } = this.props;

    return (
        <div className={css.container_stat}>
            <p className="statistick">Good: {good}</p>
            <p className="statistick">Neutral: {neutral}</p>
            <p className="statistick">Bad: {bad}</p>
            {/* <p className="statistick">Total: {total}</p>
            <p className="statistick">Positive feedback: {positiveFeedback} %</p> */}
        </div>
    )
}
    }
// export default Statistick;