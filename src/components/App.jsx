import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = e => {
    const feedbackValue = e.target.value;

    this.setState(prevState => ({
      [feedbackValue]: prevState[feedbackValue] + 1, //добавляємо до попереднього значення state +1 при кліку на button
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
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
        ;
      </div>
    );
  }
}

export default App;
