import React, { useState } from 'react';
import BetItem from '../../BetItem';
import './Market.scss';

const Market = ({ market, three }) => {
  const [isOpen, toggleOpen] = useState(true);

  let columns = 2;
  let betsListCN = 'flex bets-list';

  if (three) {
    columns = 3;
    betsListCN += ' three';
  }

  const arrowCN = isOpen ? 'fas fa-sort-down is-up' : 'fas fa-sort-down';

  return (
    <div className="market-component">
      <h2>
        {market.header}
        <i className={arrowCN} onClick={() => toggleOpen(!isOpen)}></i>
      </h2>
      {isOpen && (
        <ul className={betsListCN}>
          {market.bets.map((item, index) => {
            const isNotLast = index + 1 !== market.bets.length;
            // const isNotPenultimate = market.bets.length > columns && market.bets.length %2 === 0 && (index + 2) !== market.bets.length
            // const isNotPrePenultimate = market.bets.length %3 === 0 && (index + 3) !== market.bets.length
            let className = 'flex bet';

            if (market.bets.length > columns) {
              // className += ' with-border-bottom'
            }
            if ((index + 1) % columns !== 0 && isNotLast) {
              // className += ' with-border-side'

              return (
                <React.Fragment key={index}>
                  <li className={className}>
                    <span>{item.text}</span>
                    <BetItem>{item.value}</BetItem>
                  </li>
                  <li className="gray-line" />
                </React.Fragment>
              );
            }

            return (
              <li key={index} className={className}>
                <span>{item.text}</span>
                <BetItem>{item.value}</BetItem>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Market;
