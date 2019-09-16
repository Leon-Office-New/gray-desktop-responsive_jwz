import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import './RelatedGames.scss';

const Related = props => {
  const [open, setOpen] = useState(false);

  const relatedCN = open ? 'related open' : 'related';
  const oddsCN = open ? 'odds open' : 'odds';

  return (
    <li className={relatedCN}>
      <div className="general" onClick={() => setOpen(!open)}>
        <div className="flex string">
          <span className="name">מנצ'סטר יונייטד</span>
          <span className="secondary date">24/10</span>
        </div>
        <div className="flex string">
          <span className="name">יובנטוס</span>
          <span className="secondary date">15:00</span>
        </div>
      </div>
      <div className={oddsCN}>
        <div className="flex string">
          <span className="name">מנצ'סטר יונייטד</span>
          <span className="odd">+144</span>
        </div>
        <div className="flex string">
          <span className="name">Draw</span>
          <span className="odd">+238</span>
        </div>
        <div className="flex string">
          <span className="name">יובנטוס</span>
          <span className="odd">+136</span>
        </div>
      </div>
    </li>
  );
};

const RelatedGames = ({ t }) => {
  const text = t('relatedGames', { returnObjects: true });

  const list = [1, 2, 3, 4, 5];

  return (
    <section className="related-games">
      <h2>{text.header}</h2>
      {list.length > 0 && (
        <ul className="games-list">
          {list.map((item, index) => {
            return <Related key={index} />;
          })}
        </ul>
      )}
    </section>
  );
};

export default withTranslation()(RelatedGames);
