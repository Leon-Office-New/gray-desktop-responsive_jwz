import React, { useState } from 'react';

const MIN = 200;
const MAX = 10000;

const EditableBet = ({ text, bet, onHandleRemoveClick, onChange }) => {
  const [stake, setStake] = useState(bet.stake);

  if (stake !== bet.stake) {
    setStake(bet.stake);
  }

  const onHandleChangeStake = event => {
    setStake(event.target.value);
    onChange(Number(event.target.value), bet.id);
  };

  return (
    <div className="editable-bet">
      <div className="flex league">
        <img src={bet.category.icon} alt="sport-icon" />
        <span className="flex name">
          <span>{bet.category.name}</span>
          <span style={{ padding: '0 4px' }}>-</span>
          <span>{bet.event.name}</span>
        </span>
        <i
          className="fas fa-times"
          onClick={onHandleRemoveClick.bind(this, bet)}
        ></i>
      </div>
      <div className="flex teams">
        {bet.live && <span className="live">{text.live}</span>}
        <span className="flex score">
          <span>{bet.participants[0].score}</span>
          <span>:</span>
          <span>{bet.participants[1].score}</span>
        </span>
        <div className="flex names">
          <span className="name">{bet.participants[0].name}</span>
          <span className="secondary vs">VS</span>
          <span className="name">{bet.participants[1].name}</span>
        </div>
      </div>
      <div className="flex secondary market">
        <span>{bet.market.name}</span>
      </div>
      <div className="info">
        <div className="flex string">
          <span className="name">{bet.market.bet.name}</span>
          <span className="flex value">
            <span>{bet.market.bet.odds}</span>
            <span style={{ padding: '0 4px' }}>@</span>
            <span>{bet.market.bet.handicap_odds}</span>
          </span>
        </div>
        <div className="flex string">
          <span className="flex with-input name">
            <span>{text.stake}</span>
            <div className="min-max">
              <div className="flex">
                <span>{text.min}</span>
                <span>{MIN}</span>
              </div>
              <div className="flex">
                <span>{text.max}</span>
                <span>{MAX}</span>
              </div>
            </div>
          </span>
          <span className="value">
            <input
              type="number"
              min={MIN}
              max={MAX}
              value={stake}
              onChange={onHandleChangeStake}
            />
          </span>
        </div>
        <div className="flex string">
          <span className="name">{text.win}</span>
          <span className="value">
            {Number(bet.stake * bet.market.bet.odds).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditableBet;
