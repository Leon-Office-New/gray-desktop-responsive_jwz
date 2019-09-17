import React from 'react';
import { withTranslation } from 'react-i18next';
import './LeaguesSelection.scss';

import soccer_icon from '../../images/soccer_icon.svg';

import argentina_flag from '../../images/argentina_flag.svg';
import brazil_flag from '../../images/brazil_flag.svg';
import england_flag from '../../images/england_flag.svg';
import european_flag from '../../images/european_flag.svg';
import germany_flag from '../../images/germany_flag.svg';
import japanese_flag from '../../images/japanese_flag.svg';

let argentina = {
  name: 'ארגנטינה - אפרטורה',
  flag: argentina_flag
};
let brazil = {
  name: 'ברזיל - ברזילרו',
  flag: brazil_flag
};
let england = {
  name: 'אנגליה - .פרמייר- ליג',
  flag: england_flag
};
let european = {
  name: '..אופ״א ליגת האלופות',
  flag: european_flag
};
let germany = {
  name: 'גרמניה - בונדסליגה',
  flag: germany_flag
};
let japanese = {
  name: 'יפן - גביע',
  flag: japanese_flag
};

const LeaguesSelection = ({ t }) => {
  const text = t('leaguesSelection', { returnObjects: true });

  let leagues = [
    european,
    european,
    european,
    european,
    england,
    england,
    england,
    england,
    argentina,
    argentina,
    brazil,
    brazil,
    brazil,
    germany,
    germany,
    germany,
    japanese
  ];

  leagues = leagues.concat(leagues);
  leagues = leagues.concat(leagues);

  return (
    <section className="leagues-selection">
      <h2 className="flex">
        <div className="flex sport">
          <img src={soccer_icon} alt="sport_logo" />
          <span className="name">{'כדורגל'}</span>
        </div>
        <div className="text">{text.lineRunning}</div>
      </h2>
      {leagues.length > 0 && (
        <ul className="leagues-list">
          {leagues.map((item, index) => {
            return (
              <li key={index} className=" league">
                <input type="checkbox" />
                <img src={item.flag} alt="flag_icon" />
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      )}
      <div className="flex buttons">
        <button className="btn btn-sec">{text.buttonSelect}</button>
        <button className="btn btn-ter">{text.buttonTodays}</button>
      </div>
    </section>
  );
};

export default withTranslation()(LeaguesSelection);
