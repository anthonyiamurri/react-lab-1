import React, { Component } from 'react';
import GraphBar from './GraphBar'

  class Graph extends Component {

    render() {

      return(
        <div className="Graph">
          <GraphBar label={"Vanilla"} value={this.props.vanilla}/>
          <GraphBar label={"Chocolate"} value={this.props.chocolate}/>
          <GraphBar label={"Strawberry"} value={this.props.strawberry}/>
        </div>
      )

    }

  }

export default Graph;
