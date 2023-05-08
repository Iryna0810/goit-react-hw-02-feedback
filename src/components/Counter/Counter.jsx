import React, { Component } from "react";
import Controls from "./Controls";
import css from './counter.module.css'
import Statistick from "./Statistic";


export class Counter extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback: 0,
    };
    
    handleIncrement = (event) => {
        const value = event.target.name;
        this.setState(prevState =>
        ({
            [value]: prevState[value] + 1,
        }))
        
        this.countTotalFeedback();    
        this.countPositiveFeedbackPercentage();
    }
 
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        this.setState(() => ({
            total: 1 + good + neutral + bad,
        })
        )
    }

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad, total, positiveFeedback } = this.state;
        this.setState(() => ({
            positiveFeedback:  good / total !== NaN ? good / total * 100 : 0,
        })
        
    )
    
    }
    

    render() {
        //         this.countTotalFeedback();    
        // this.countPositiveFeedbackPercentage();
    return (
        <div className={css.container} >
            <h2 className={css.tytle_feedback}>Please leave feedback</h2>
            <Controls
                onIncrement={this.handleIncrement}
            
            />
            
            <h3 className={css.tytle_statistick}>Statistics</h3>
            <Statistick
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.state.total}
                positiveFeedback = {this.state.positiveFeedback}
            />
       
        </div>
    )   
}
};
