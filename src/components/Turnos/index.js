import React, { Component } from 'react';
import './index.css';

export default class Turno extends Component {
  render() {
    return <div className="contador">{`Turnos: ${this.props.turnos}`}</div>;
  }
}
