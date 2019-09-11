import React, { Component } from 'react';
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
      ],
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
  }

  shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
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
      this.props.sumarTurno();
      return true;
    } else {
      return false;
    }
  };

  unFlipCards = (meta) => {
    const state = this.state;
    const cards = state.cards.map((card) => {
      if (card.meta === meta) {
        card.isFlipped = false;
      }
      return card;
    });
    state.cards = cards;
    this.setState(state);
  };

  getMeta = (name) => {
    const meta = this.state.cards
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
    const { cards } = this.state;
    let cardAlreadyFlipped = false;
    cards.map((card) => {
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
        cards.map((card) => {
          if (card.name === name && !card.isFlipped) {
            card.isFlipped = false;
          }
          return card;
        });
      }
      this.setState({
        ...this.state,
        cards
      });
    }
  };

  render() {
    return (
      <div className="table">
        {this.state.cards.map((card, index) => {
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
