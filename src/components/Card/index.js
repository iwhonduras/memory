import React, { Component } from 'react';
import './index.css';

export default class Card extends Component {
  render() {
    const { isFlipped } = this.props.flag;
    return (
      <div
        onClick={() => {
          this.props.flipCard(this.props.flag.name);
        }}
      >
        {isFlipped ? (
          <img src={this.props.flag.image} className="card" alt="" />
        ) : (
          <img src={this.props.terra} className="card front" alt="" />
        )}
      </div>
    );
  }
}
