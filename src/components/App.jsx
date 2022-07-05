import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{}</li>
          <li>Neutral:{}</li>
          <li>Bad:{}</li>
          <li>Total:{}</li>
          <li>Positive feedback:{}</li>
        </ul>
      </>
    );
  }
}
