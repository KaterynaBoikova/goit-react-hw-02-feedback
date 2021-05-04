import React, {Component} from 'react';
import Section from "./Components/Section/Section";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Notification from "./Components/Notification/Notification";
const FeedOptions=['Good', 'Neutral', 'Bad'];

class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    hadleFeedback = (index) => {
        this.setState(prevState => {
            return{
                good: index===0 ? prevState.good + 1: prevState.good,
                neutral: index===1 ? prevState.neutral + 1: prevState.neutral,
                bad: index===2 ? prevState.bad + 1: prevState.bad,
            }
        })
    };
    countTotalFeedback=(a, b, c)=>{return a+b+c};
    countPositiveFeedbackPercentage=(a,b,c)=>{return Math.round(a/(a+b+c)*100)};
    render() {
        let checkIfAnyFeedback = this.state.good+this.state.bad+this.state.neutral > 0 ? false: true ;
        return(
         <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={FeedOptions} onLeaveFeedback={this.hadleFeedback}/>
                </Section>

                <Section title="Statistics">
                    {checkIfAnyFeedback?
                    <Notification message="No feedback given"/> :
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback}
                        positivePercentage={this.countPositiveFeedbackPercentage}/>}
                </Section>
         </div>

        )
    }
};
export default App;