import React, {Component} from 'react';
import Section from "./Components/Section/Section";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Notification from "./Components/Notification/Notification";
const FEED_OPTIONS=['Good', 'Neutral', 'Bad'];

class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    hadleFeedback = option => {
        this.setState(prevState => ({
            [option.toLowerCase()]: prevState[option.toLowerCase()] + 1,
        }));
    };
    countTotalFeedback=()=>{return this.state.good+this.state.neutral+this.state.bad};
    countPositiveFeedbackPercentage=()=>{return Math.round(this.state.good/this.countTotalFeedback()*100)};
    render() {
        let checkIfAnyFeedback = this.state.good+this.state.bad+this.state.neutral > 0 ? false: true ;
        return(
         <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={FEED_OPTIONS} onLeaveFeedback={this.hadleFeedback}/>
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