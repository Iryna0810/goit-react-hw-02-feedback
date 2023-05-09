import { Component } from "react";
import { FeedbackOptions } from "./Feedback/Feedback";
import { Statistic } from "./Statistic/Statistic";
import { Title } from "./Title/Title";



export class App extends Component {
   state = {
        good: 0,
        neutral: 0,
        bad: 0,
  }

      handleIncrement = (event) => {
        const value = event.target.name;
        this.setState(prevState =>
        ({
            [value]: prevState[value] + 1,
        }))
                
  }

  total = () => {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    return total;
  }
  
  
  positivePercentage = () => {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    const pozPercentage = good / total * 100;
    return pozPercentage;
    
  }
  
  render(){
  return(
    <div 
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#fff',
        backgroundColor: 'rgb(88, 88, 237)',
        width: 'auto',
        height: 'auto',
        padding:'30px',
        margin: '0 auto',
        borderRadius: '10px',
      }}>
      <Title
        title="Please leave feedback"
      >
        <FeedbackOptions
         onLeaveFeedback={this.handleIncrement}
              />
      
      <Statistic
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.total}
                positiveFeedback = {this.positivePercentage}
        />
        </Title>
    </div>
    )
  }
};
