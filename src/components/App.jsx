import React from 'react';
import Statistics from './Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodBtnClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  onNeutralBtnClick = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  onBadBtnClick = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    if (good + neutral + bad === 0) {
      return 0;
    } else {
      return Math.round((good * 100) / (good + neutral + bad));
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.onGoodBtnClick}>
          Good
        </button>
        <button type="button" onClick={this.onNeutralBtnClick}>
          Neutral
        </button>
        <button type="button" onClick={this.onBadBtnClick}>
          Bad
        </button>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(good, neutral, bad)}
          positivePercentage={this.countPositiveFeedbackPercentage(
            good,
            neutral,
            bad
          )}
        ></Statistics>
      </>
    );
  }
}
