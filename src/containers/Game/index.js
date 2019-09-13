import React, { Component } from 'react';

import Menu from '../menu';
import Table from '../Table';
import Turnos from '../../components/Turnos';

import './index.css';
import logoBlanco from '../../Assets/mic/LogoBlanco.png';
import ContadorCard from '../../Assets/mic/ContadorCard.png';

export default class Game extends Component {
  state = {
    turnos: 0,
    juegoIniciado: false,
    paresFaltantes: 8
  };

  resetTurnos = () => {
    this.setState({ turnos: 0 });
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

  restarPar = () => {
    const pares = this.state.paresFaltantes - 1;
    this.setState({ paresFaltantes: pares });
  };

  render() {
    let render;
    this.state.juegoIniciado
      ? (render = (
          <div className="game">
            <div className="container">
              <img src={ContadorCard} alt="" />
              <div className="paresfaltantes">{this.state.paresFaltantes}</div>
            </div>
            <Turnos turnos={this.state.turnos} />
            <Table
              sumarTurno={this.sumarTurno}
              resetTurnos={this.resetTurnos}
              regresar={this.regresar}
              restarPar={this.restarPar}
            />
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
