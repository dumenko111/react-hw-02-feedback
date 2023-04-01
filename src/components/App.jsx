import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = e => { //добавляємо до попереднього значення state +1 при кліку на button
    const feedbackValue = e.target.value;

    this.setState(prevState => ({
      [feedbackValue]: prevState[feedbackValue] + 1, //в feedbackValue відображається, яка кнопка була натиснута
    }));
  };

  countTotalFeedback = () => {
    const objValues = Object.values(this.state);
    return objValues.reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div className='wrapper'>
      <Section title={'Please leave feedback'}>
      
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
          
          </Section>
      
        
        <Section>

          {this.countTotalFeedback() > 0 ?
            <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
            :
            <Notification title={"There is no feedback"} />}
        

          </Section>
        </div>
    );
  }
}

export default App;
