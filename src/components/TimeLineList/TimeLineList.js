import React from 'react';
import { withTranslation } from 'react-i18next';
import './TimeLineList.scss';

import change_icon from '../../images/change-player.svg';
import red_card from '../../images/red-card.svg';
import yellow_card from '../../images/yellow-card.svg';
import soccer_goal from '../../images/soccer-goal.svg';

import mu from '../../images/manchester.png';
import ju from '../../images/juventus.png';

let list = [
  {
    time: "16' 32''",
    icon: red_card,
    name: 'Red Card',
    player: 'Mario Mandžukić',
    team_icon: ju
  },
  {
    time: "22' 57''",
    icon: yellow_card,
    name: 'Yellow Card',
    player: 'Jesse Lingard',
    team_icon: mu
  },
  {
    time: "30' 00''",
    icon: change_icon,
    name: 'Change Player',
    player: 'Lingard - Martial',
    team_icon: mu
  },
  {
    time: "54' 46''",
    icon: soccer_goal,
    name: 'GOAL',
    player: 'Mario Mandžukić',
    team_icon: ju
  }
];

list = list.concat(list);

const TimeLineList = ({ t }) => {
  const text = t('timeLineList', { returnObjects: true });

  return (
    <section className="time-line-list">
      <h2>{text.header}</h2>
      {list.length > 0 && (
        <ul className="incidents-list">
          {list.map((item, index) => {
            return (
              <li key={index} className="flex incident">
                <div className="time-icon">
                  <img src={item.icon} alt="incident icon" />
                  <div>{item.time}</div>
                </div>
                <div className="text">
                  <div className="name">{item.name}</div>
                  <div className="flex player">
                    <span>{item.player}</span>
                    <img src={item.team_icon} alt="team icon" />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default withTranslation()(TimeLineList);
