import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './BetItem.scss';

import { addCardBet } from '../../redux/chance';

const BetItem = ({ children, displayOnly, addCardBet, bet, market }) => {
  let className = 'bet-item';
  if (!displayOnly) {
    if (Math.random() > 0.5) {
      className += ' more';
    } else {
      className += ' less';
    }
  }

  const onHandleClick = event => {
    console.log(bet, market);
    addCardBet(bet, market.type);
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
      addCardBet
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BetItem);
