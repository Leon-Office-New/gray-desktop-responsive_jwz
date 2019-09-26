import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditableBet from './EditableBet';
import './BetSlip.scss';

import {
  removeBet,
  changeStakeOfBet,
  removeAllBets
} from '../../redux/bet_slip';

const BetSlip = ({ t, bets, removeBet, removeAllBets, changeStakeOfBet }) => {
  const text = t('betSlip', { returnObjects: true });
  const [tab, setTab] = useState(0);
  const [stake, setStake] = useState(200);
  const [totalWin, setTotalWin] = useState(stake * bets.length);

  // const bets = [2, 3, 4, 5];
  const onHandleRemoveClick = bet => {
    removeBet(bet.id);
  };

  const onHandleSingleStake = event => {
    const value = Number(event.target.value);
    setStake(value);

    let total = 0;
    for (let bet of bets) {
      changeStakeOfBet(value, bet.id);
      total += value * bet.market.bet.odds;
    }
    setTotalWin(total);
  };

  return (
    <section className="bet-slip">
      <h2>{text.header}</h2>
      <ul className="flex tabs">
        {text.tabs.map((item, index) => {
          let className = tab === index ? 'tab active' : 'tab';
          return (
            <li key={index} className={className} onClick={() => setTab(index)}>
              {item}
            </li>
          );
        })}
      </ul>
      {bets.length === 0 && <div className="empty-text">{text.emptyList}</div>}
      {bets.length > 0 && (
        <ul className="editable-bets-list">
          {bets.map((item, index) => {
            return (
              <EditableBet
                key={index}
                text={text}
                bet={item}
                onHandleRemoveClick={onHandleRemoveClick}
                onChange={changeStakeOfBet}
              />
            );
          })}
        </ul>
      )}
      {bets.length > 0 && (
        <div
          className={
            bets.length % 2 === 1 && bets.length !== 1
              ? 'bets-options'
              : 'bets-options odd-length'
          }
        >
          {bets.length > 1 && tab === 0 && (
            <div className="single-options">
              <div className="flex total-bets">
                <span>{text.totalBets}</span>
                <span>{bets.length}</span>
              </div>
              <div className="flex stake">
                <span className="flex with-input name">
                  <span>{text.stake}</span>
                  <div className="min-max">
                    <div className="flex">
                      <span>{text.min}</span>
                      <span>{200}</span>
                    </div>
                    <div className="flex">
                      <span>{text.max}</span>
                      <span>{10000}</span>
                    </div>
                  </div>
                </span>
                <span className="value">
                  <input
                    type="number"
                    min={200}
                    max={10000}
                    value={stake}
                    onChange={onHandleSingleStake}
                  />
                </span>
              </div>
              <div className="flex total-risk">
                <span>{text.totalRisk}</span>
                <span>{stake * bets.length}</span>
              </div>
              <div className="flex total-win">
                <span>{text.totalWin}</span>
                <span>{Number(totalWin).toFixed(2)}</span>
              </div>
            </div>
          )}
          {bets.length > 1 && (
            <div className="flex accept-any-odds">
              <input type="checkbox" />
              <span>{text.accept}</span>
            </div>
          )}
          <div className="flex buttons">
            <button className="btn btn-sec">{text.buttonBet}</button>
            <button className="btn btn-ter" onClick={removeAllBets}>
              {text.buttonRemove}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = state => ({
  bets: state.bet_slip.bets
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeAllBets,
      removeBet,
      changeStakeOfBet
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(BetSlip));
