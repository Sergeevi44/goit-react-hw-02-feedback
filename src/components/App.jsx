import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positive = (good * 100) / total;
    return (
      <>
        <h2>Please leave feedback</h2>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          {(positive || !isNaN) && <li>Positive feedback:{positive}%</li>}
        </ul>
      </>
    );
  }
}
