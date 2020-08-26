import React, { Component } from 'react';

class Bands extends Component {

  render() {
    return(
      <li>
        <p>{this.props.name}</p>
        <button onClick={() => this.props.delete(this.props.id)}>DELETE</button>
      </li>
    );
  }
};

export default Bands;
