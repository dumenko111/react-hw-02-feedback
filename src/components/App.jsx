import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  checkingStatistics = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>

        <button onClick={this.checkingStatistics}>Good</button>
        <button>Nutrale</button>
        <button>Bad</button>

        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}

export default App;
