import React from 'react';
import Market from '../MarketsList/Market';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './ChanceMarkets.scss';

import pike from '../../images/pike-circle.svg';
import diamond from '../../images/diamond-circle.svg';
import club from '../../images/club-circle.svg';
import heart from '../../images/heart-circle.svg';

import { addCardBet } from '../../redux/chance';

const icons = [pike, diamond, club, heart];

let total_markets = [
  {
    header: 'TOTAL UNDER/OVER',
    bets: [
      {
        text: 'Under',
        value: 1.56
      },
      {
        text: 'Over',
        value: 1.87
      }
    ]
  },
  {
    header: 'TOTAL ODD/EVEN',
    bets: [
      {
        text: 'Odd',
        value: 2.15
      },
      {
        text: 'Even',
        value: 1.43
      }
    ]
  }
];

const cardMarket = (header, icon, bets, type) => {
  return {
    header,
    icon,
    bets,
    type
  };
};

const ChanceMarkets = ({ selectedCards, odds_of_cards }) => {
  const cards_types = ['pike', 'diamond', 'club', 'heart'];
  let cards_markets = [];
  for (let i = 0; i < icons.length; i++) {
    cards_markets.push(
      cardMarket(`${i + 1} קלף`, icons[i], odds_of_cards, cards_types[i])
    );
  }

  if (selectedCards.length > 0) {
    total_markets[0].header = `TOTAL UNDER/OVER ${10.5 * selectedCards.length}`;
  } else {
    total_markets[0].header = `TOTAL UNDER/OVER`;
  }

  return (
    <section className="chance-markets">
      <div className="flex total-markets">
        {total_markets.map((item, index) => {
          return <Market key={index} market={item} />;
        })}
      </div>
      <div className="flex cards-markets">
        {cards_markets.map((item, index) => {
          return (
            <div key={index} className="card-market">
              <Market market={item} />
              <img className="card-icon" src={item.icon} alt="type of card" />
              {!selectedCards.includes(item.type) && <div className="hover" />}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  bets_of_cards: state.chance.bets_of_cards,
  odds_of_cards: state.chance.odds_of_cards,
  selectedCards: state.chance.selectedCards
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCardBet
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChanceMarkets);
