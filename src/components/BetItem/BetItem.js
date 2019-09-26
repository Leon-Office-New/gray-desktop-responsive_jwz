import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './BetItem.scss';

import { addCardBet } from '../../redux/chance';
import { addBet, DEFAULT_BET } from '../../redux/bet_slip';

const BetItem = ({
  children,
  displayOnly,
  addCardBet,
  addBet,
  bet,
  market
}) => {
  let className = 'bet-item';
  if (!displayOnly) {
    if (Math.random() > 0.5) {
      className += ' more';
    } else {
      className += ' less';
    }
  }

  const onHandleClick = event => {
    if (market && market.type) {
      addCardBet(bet, market.type);
    } else {
      addBet(DEFAULT_BET, children);
    }
  };

  return (
    <div className={className} onClick={onHandleClick}>
      {children}
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCardBet,
      addBet
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BetItem);
