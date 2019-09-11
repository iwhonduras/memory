import React, { Component } from 'react';

import FondoAzul from '../../Assets/mic/Fondoazul.png';
import ninos from '../../Assets/mic/ninos.jpg';
import celebremos2 from '../../Assets/mic/celebremos2.png';
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
          <img src={celebremos2} className="celebremos" alt="" />
          <img
            src={jugar}
            className="celebremos boton"
            alt=""
            onClick={() => {
              this.props.jugar();
            }}
          />
          <img src={ver} className="celebremos boton" alt="" />
        </div>
      </React.Fragment>
    );
  }
}