import { Component } from "react";
import { Counter } from "./Counter/Counter";
import css from "./Counter/counter.module.css";
import { Statistics } from "./Counter/Statistic";



export class App extends Component {
   state = {
        good: 0,
        neutral: 0,
        bad: 0,
        // total: 0,
        // positiveFeedback: 0,
  }
      handleIncrement = (event) => {
        const value = event.target.name;
        this.setState(prevState =>
        ({
            [value]: prevState[value] + 1,
        }))
                
    }
  
  render(){
  return(
    <div 
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        // color: '#010101'
        color: '#fff',
        backgroundColor: 'rgb(88, 88, 237)',
        width: '500px',
        height: 'auto',
        padding:'30px',
        margin: '0 auto',
        borderRadius: '10px',
      }}>
      <Counter
        onHandleIncrement={this.handleIncrement}
        good={this.state.good}
        neutral={this.state.neutral}
        bad = {this.state.bad}
      />
      <h3 className={css.tytle_statistick}>Statistics</h3>
      <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                // total={this.state.total}
                // positiveFeedback = {this.state.positiveFeedback}
            />
    </div>
    )
    }
};
