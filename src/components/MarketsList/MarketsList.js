import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import './MarketsList.scss';

const MarketsHeader = ({ text, selected, onHandleClick }) => {
  const list = text.types;

  return (
    <ul className="flex types-list">
      {list.map(item => {
        const className = item.id === selected ? 'type selected' : 'type';
        return (
          <li
            key={item.id}
            className={className}
            onClick={onHandleClick.bind(this, item.id)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

const MarketsList = ({ t }) => {
  const text = t('marketsList', { returnObjects: true });
  const [marketsTypeId, setMarketsTypeId] = useState(text.header.types[0].id);

  const onHandleSelectType = id => {
    setMarketsTypeId(id);
  };

  console.log('marketsTypeId', marketsTypeId);

  return (
    <section className="markets-list">
      <MarketsHeader
        text={text.header}
        selected={marketsTypeId}
        onHandleClick={onHandleSelectType}
      />
    </section>
  );
};

export default withTranslation()(MarketsList);
