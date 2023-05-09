import React, { Component } from "react";
// import Controls from "./Controls";
import css from './counter.module.css'



export class Counter extends Component {

    state = {
        // good: 0,
        // neutral: 0,
        // bad: 0,
        total: 0,
        positiveFeedback: 0,
    };
    

 
    countTotalFeedback = () => {
        const {good, neutral, bad } = this.state;
        this.setState(() => ({
            total: 1 + good + neutral + bad,
        })
        )
    }

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad, total, positiveFeedback } = this.state;
        
        console.log(this.state);


        this.setState(() => ({
            positiveFeedback: good / total * 100,
        })
        
    )
    
    }
    

    render() {
        //         this.countTotalFeedback();
        // this.countPositiveFeedbackPercentage();
        const { onHandleIncrement} = this.props;

    return (
    <div className={css.container} >
        <h2 className={css.tytle_feedback}>Please leave feedback</h2>
        <div className={css.counter__controls}>
        <button type="button" name="good" className={css.button} onClick={onHandleIncrement}>Good</button>
        <button type="button" name="neutral" className={css.button} onClick={onHandleIncrement}>Neutral</button>
        <button type="button" name="bad" className={css.button} onClick={onHandleIncrement}>Bad</button>
        </div>
    </div>
    )   
}
};
