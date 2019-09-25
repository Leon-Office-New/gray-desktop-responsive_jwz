import React from 'react';
import './BetItem.scss';

const BetItem = ({ children, displayOnly }) => {
  let className = 'bet-item';
  if (!displayOnly) {
    if (Math.random() > 0.5) {
      className += ' more';
    } else {
      className += ' less';
    }
  }

  return <div className={className}>{children}</div>;
};

export default BetItem;
