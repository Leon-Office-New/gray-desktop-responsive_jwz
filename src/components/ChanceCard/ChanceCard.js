import React from 'react';
import PropTypes from 'prop-types';
import './ChanceCard.scss';

import pike from '../../images/pike_icon.svg';
import diamond from '../../images/diamond_icon.svg';
import club from '../../images/club_icon.svg';
import heart from '../../images/heart_icon.svg';

const icons = {
  pike,
  diamond,
  club,
  heart
};

const ChanceCard = ({ type, value, onClick }) => {
  const isRedCard = ['diamond', 'heart'].includes(type);
  let className = 'chance-card';
  if (isRedCard) className += ' red';

  return (
    <div className={className} onClick={onClick}>
      <div className="left-top">
        <span>{value}</span>
        <img src={icons[type]} alt={`${type} card`} />
      </div>
      <div className="center">
        <img className="with-shadow" src={icons[type]} alt={`${type} card`} />
      </div>
      <div className="right-bottom">
        <img src={icons[type]} alt={`${type} card`} />
        <span>{value}</span>
      </div>
    </div>
  );
};

ChanceCard.propTypes = {
  type: PropTypes.oneOf(['pike', 'diamond', 'club', 'heart']).isRequired,
  value: PropTypes.string
};

export default ChanceCard;
