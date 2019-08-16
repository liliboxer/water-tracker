import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class WaterForm extends Component {
  state = {
    ounces: '',
    totalWater: 0
  }

handleSubmit = event => {
  event.preventDefault();
  const total = parseInt(this.state.ounces) + parseInt(this.state.totalWater);
  this.setState({ totalWater:  total, ounces: '' });
}

handleOuncesChange = ({ target }) => {
  this.setState({ ounces: target.value });
}

render() {
  const { ounces, totalWater } = this.state;

  return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="ounces" 
            name="ounces" 
            value={ounces} 
            onChange={this.handleOuncesChange} 
            placeholder="ounces of water">
          </input>
          <button>Submit</button>
        </form>
        <p>Total Water:</p>
        <p>{totalWater}</p>
        <label htmlFor="file">Water Progress:</label>
        <progress id="file" max="100" value={totalWater}> 70% </progress>
      </>
  );
}
}

