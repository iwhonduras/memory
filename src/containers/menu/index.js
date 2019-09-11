import React, { Component } from 'react';

import FondoAzul from '../../Assets/mic/Fondoazul.png';
import ninos from '../../Assets/mic/ninos.jpg';
import celebremos3 from '../../Assets/mic/Celebremos3.png';
import jugar from '../../Assets/mic/Jugar.png';
import ver from '../../Assets/mic/VerMas.png';
import './index.css';

export default class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="background">
          <img src={FondoAzul} className="fondoAzul" alt="" />
          <img src={ninos} className="ninos" alt="" />
        </div>
        <div className="top">
          <img src={celebremos3} className="celebremos" alt="" />
          <img
            src={jugar}
            className="celebremos boton"
            alt=""
            onClick={() => {
              this.props.jugar();
            }}
          />
          <a
            href="https://corporaciongrupoterra.com/es/fundacion-terra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ver} className="celebremos boton" alt="" />
          </a>
        </div>
      </React.Fragment>
    );
  }
}
