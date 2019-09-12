import React, { Component } from 'react';

import backgroundNinos from '../../Assets/mic/background.jpg';
import celebremos4 from '../../Assets/mic/Celebremos4.png';
import jugar from '../../Assets/mic/Jugar.png';
import ver from '../../Assets/mic/VerMas.png';
import './index.css';

export default class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="background">
          <img src={backgroundNinos} alt="" class="responsiveImage" />
        </div>
        <div className="top">
          <img src={celebremos4} className="celebremos" alt="" />
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
