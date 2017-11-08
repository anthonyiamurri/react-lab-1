import React, {Component} from 'react';
import Graph from './Graph';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vanillaVotes: null,
      chocolateVotes: null,
      strawberryVotes: null
    }
  }
  handleVanillaClicks() {
    this.setState(prevState => ({
      vanillaVotes: prevState.vanillaVotes + 1
    }))
  };
  handleChocolateClicks() {
    this.setState(prevState => ({
      chocolateVotes: prevState.chocolateVotes + 1
    }))
  };
  handleStrawberryClicks() {
    this.setState(prevState => ({
      strawberryVotes: prevState.strawberryVotes + 1
    }))
  };
  render() {
    return (<div className="App">
      <Graph
      vanilla = {this.state.vanillaVotes}
      chocolate = {this.state.chocolateVotes}
      strawberry = {this.state.strawberryVotes}
      />
      <button onClick={this.handleVanillaClicks.bind(this)}>
        vote for vanilla
      </button>
      <button onClick={this.handleChocolateClicks.bind(this)}>
        vote for chocolate
      </button>
      <button onClick={this.handleStrawberryClicks.bind(this)}>
        vote for strawberry
      </button>
    </div>);
  }
};
export default App;
