import React, { Component } from 'react';

import Menu from '../menu';
import Table from '../Table';
import Turnos from '../../components/Turnos';

import './index.css';
import logoBlanco from '../../Assets/mic/LogoBlanco.png';

export default class Game extends Component {
  state = {
    turnos: 0,
    juegoIniciado: false
  };

  sumarTurno = () => {
    this.setState({
      turnos: this.state.turnos + 1
    });
  };

  jugar = () => {
    this.setState({
      juegoIniciado: true
    });
  };

  regresar = () => {
    this.setState({
      juegoIniciado: false
    });
  };

  render() {
    let render;
    this.state.juegoIniciado
      ? (render = (
          <div className="game">
            <Turnos turnos={this.state.turnos} />
            <Table sumarTurno={this.sumarTurno} />
            <footer className="footer">
              <img src={logoBlanco} className="logoBlanco" alt="logo" />
              <button
                className="regresar"
                onClick={() => {
                  this.regresar();
                }}
              >
                Regresar
              </button>
            </footer>
          </div>
        ))
      : (render = <Menu jugar={this.jugar} />);

    return render;
  }
}
