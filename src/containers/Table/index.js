import React, { Component } from 'react';
import Swal from 'sweetalert2';

import Card from '../../components/Card';

import TerraImage from '../../Assets/Back/terraLogo.png';
import HondurasImage from '../../Assets/Flags/honduras.png';
import NicaraguaImage from '../../Assets/Flags/nicaragua.png';
import CostaRicaImage from '../../Assets/Flags/costarica.png';
import SalvadorImage from '../../Assets/Flags/salvador.png';
import GuatemalaImage from '../../Assets/Flags/guatemala.png';
import Honduras2Image from '../../Assets/Flags/honduras2.png';
import CentroAmericaImage from '../../Assets/Flags/centroamerica.png';
import CentroAmericaImage2 from '../../Assets/Flags/centroamerica.png';
import TerraBack from '../../Assets/Flags/terra.png';
import quincesep from '../../Assets/Flags/15sep.png';
import anos from '../../Assets/Flags/198anos.png';
import ca3d from '../../Assets/Flags/ca3d.png';
import caunida from '../../Assets/Flags/caunida.png';
import felicesfiestas from '../../Assets/Flags/felicesfiestas.png';
import general from '../../Assets/Flags/general.png';
import guerra from '../../Assets/Flags/guerra.png';
import logoterrasintexto from '../../Assets/Flags/logoterrasintexto.png';

import './index.css';

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          name: 'Honduras',
          meta: 'Honduras',
          image: HondurasImage,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'Nicaragua',
          meta: 'Nicaragua',
          image: NicaraguaImage,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'Costa Rica',
          meta: 'Costa Rica',
          image: CostaRicaImage,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'Salvador',
          meta: 'Salvador',
          image: SalvadorImage,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'Guatemala',
          meta: 'Guatemala',
          image: GuatemalaImage,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'Honduras 2-1',
          meta: 'Honduras 2',
          image: Honduras2Image,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'Centro America',
          meta: 'Centro America',
          image: CentroAmericaImage,
          partnerFound: false,
          isFlipped: false
        },
        // {
        //   name: 'Centro America2',
        //   meta: 'Centro America',
        //   image: CentroAmericaImage2,
        //   partnerFound: false,
        //   isFlipped: false
        // },
        // {
        //   name: 'Honduras2',
        //   meta: 'Honduras',
        //   image: HondurasImage,
        //   partnerFound: false,
        //   isFlipped: false
        // },
        // {
        //   name: 'Nicaragua2',
        //   meta: 'Nicaragua',
        //   image: NicaraguaImage,
        //   partnerFound: false,
        //   isFlipped: false
        // },
        // {
        //   name: 'Costa Rica2',
        //   meta: 'Costa Rica',
        //   image: CostaRicaImage,
        //   partnerFound: false,
        //   isFlipped: false
        // },
        // {
        //   name: 'Salvador2',
        //   meta: 'Salvador',
        //   image: SalvadorImage,
        //   partnerFound: false,
        //   isFlipped: false
        // },
        // {
        //   name: 'Guatemala2',
        //   meta: 'Guatemala',
        //   image: GuatemalaImage,
        //   partnerFound: false,
        //   isFlipped: false
        // },
        // {
        //   name: 'Honduras 2-2',
        //   meta: 'Honduras 2',
        //   image: Honduras2Image,
        //   partnerFound: false,
        //   isFlipped: false
        // },
        {
          name: 'Terra',
          meta: 'Terra',
          image: TerraBack,
          partnerFound: false,
          isFlipped: false
        },
        // {
        //   name: 'Terra2',
        //   meta: 'Terra',
        //   image: TerraBack,
        //   partnerFound: false,
        //   isFlipped: false
        // }
        {
          name: 'quincesep',
          meta: 'quincesep',
          image: quincesep,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'anos',
          meta: 'anos',
          image: anos,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'ca3d',
          meta: 'ca3d',
          image: ca3d,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'caunida',
          meta: 'caunida',
          image: caunida,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'felicesfiestas',
          meta: 'felicesfiestas',
          image: felicesfiestas,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'general',
          meta: 'general',
          image: general,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'guerra',
          meta: 'guerra',
          image: guerra,
          partnerFound: false,
          isFlipped: false
        },
        {
          name: 'logoterrasintexto',
          meta: 'logoterrasintexto',
          image: logoterrasintexto,
          partnerFound: false,
          isFlipped: false
        }
      ],
      cardsInGame: [],
      front: TerraImage,
      attemptCardsFlipped: []
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({
      ...this.state,
      cards: this.shuffle(this.state.cards)
    });
    this.props.resetTurnos();
    this.setInitialCards();
  }

  setInitialCards = () => {
    const cards = this.shuffle(this.state.cards).slice(0, 8);
    const playingCards = [];
    cards.forEach((card) => {
      playingCards.push(card);
      playingCards.push(this.createPartner(card));
    });
    this.setState({ cardsInGame: this.shuffle(playingCards) });
  };

  createPartner = (card) => {
    return {
      name: `${card.name}2`,
      meta: card.meta,
      image: card.image,
      partnerFound: false,
      isFlipped: false
    };
  };

  shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  checkWin = () => {
    const win = this.state.cardsInGame.every((card) => card.partnerFound);
    if (win) {
      Swal.fire({
        type: 'success',
        title: '¡Felicidades, has ganado!',
        text: ''
      }).then(() => {
        // this.resetGame();
        this.props.regresar();
      });
    }
  };

  resetGame = () => {
    const newCards = [
      {
        name: 'Honduras',
        meta: 'Honduras',
        image: HondurasImage,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Nicaragua',
        meta: 'Nicaragua',
        image: NicaraguaImage,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Costa Rica',
        meta: 'Costa Rica',
        image: CostaRicaImage,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Salvador',
        meta: 'Salvador',
        image: SalvadorImage,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Guatemala',
        meta: 'Guatemala',
        image: GuatemalaImage,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Honduras 2-1',
        meta: 'Honduras 2',
        image: Honduras2Image,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Centro America',
        meta: 'Centro America',
        image: CentroAmericaImage,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Centro America2',
        meta: 'Centro America',
        image: CentroAmericaImage2,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Honduras2',
        meta: 'Honduras',
        image: HondurasImage,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Nicaragua2',
        meta: 'Nicaragua',
        image: NicaraguaImage,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Costa Rica2',
        meta: 'Costa Rica',
        image: CostaRicaImage,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Salvador2',
        meta: 'Salvador',
        image: SalvadorImage,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Guatemala2',
        meta: 'Guatemala',
        image: GuatemalaImage,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Honduras 2-2',
        meta: 'Honduras 2',
        image: Honduras2Image,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Terra',
        meta: 'Terra',
        image: TerraBack,
        partnerFound: false,
        isFlipped: false
      },
      {
        name: 'Terra2',
        meta: 'Terra',
        image: TerraBack,
        partnerFound: false,
        isFlipped: false
      }
    ];
    this.setState({ cards: newCards });
    this.props.resetTurnos();
  };

  checkFlippedCards = (name) => {
    let selectedCards = this.state.attemptCardsFlipped;
    if (this.state.attemptCardsFlipped.length < 2) {
      selectedCards.push(name);
    }
    this.setState({
      attemptCardsFlipped: selectedCards
    });

    if (this.state.attemptCardsFlipped.length === 2) {
      this.partnerFound(
        this.state.attemptCardsFlipped[0],
        this.state.attemptCardsFlipped[1]
      );
      this.checkWin();
      this.props.sumarTurno();
      return true;
    } else {
      return false;
    }
  };

  unFlipCards = (meta) => {
    const state = this.state;
    const cards = state.cardsInGame.map((card) => {
      if (card.meta === meta) {
        card.isFlipped = false;
      }
      return card;
    });
    state.cards = cards;
    this.setState(state);
  };

  getMeta = (name) => {
    const meta = this.state.cardsInGame
      .map((card) => {
        let meta;
        if (card.name === name) {
          meta = card.meta;
        }
        return meta;
      })
      .filter((card) => typeof card !== 'undefined');

    return meta[0];
  };

  partnerFound = (name1, name2) => {
    const state = this.state;
    const meta1 = this.getMeta(name1);
    const meta2 = this.getMeta(name2);
    let partnerFound = false;
    console.log({ meta1, meta2 });
    if (meta1 === meta2) {
      state.cards = state.cards.map((card) => {
        if (card.name === name1 || card.name === name2) {
          card.partnerFound = true;
          partnerFound = true;
        }
        return card;
      });
    }
    state.attemptCardsFlipped = [];
    this.setState(state);
    if (!partnerFound) {
      setTimeout(() => {
        this.unFlipCards(meta1);
      }, 1000);
      setTimeout(() => {
        this.unFlipCards(meta2);
      }, 1000);
    }
    return partnerFound;
  };

  flipCard = (name) => {
    const { cardsInGame } = this.state;
    let cardAlreadyFlipped = false;
    cardsInGame.map((card) => {
      if (card.name === name && card.isFlipped === true) {
        cardAlreadyFlipped = true;
        return card;
      }
      if (card.name === name && !card.isFlipped) {
        card.isFlipped = true;
      }
      return card;
    });
    if (cardAlreadyFlipped === false) {
      const check = this.checkFlippedCards(name);
      if (!check) {
        cardsInGame.map((card) => {
          if (card.name === name && !card.isFlipped) {
            card.isFlipped = false;
          }
          return card;
        });
      }
      this.setState({
        ...this.state,
        cardsInGame
      });
    }
  };

  render() {
    return (
      <div className="table">
        {this.state.cardsInGame.map((card, index) => {
          return (
            <Card
              flag={card}
              terra={this.state.front}
              flipCard={this.flipCard}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}
