import React, { useState } from 'react';
import chroma from 'chroma-js';
import './TimeLine.scss';

import change_icon from '../../images/change-player.svg';
import red_card from '../../images/red-card.svg';
import yellow_card from '../../images/yellow-card.svg';
import soccer_goal from '../../images/soccer-goal.svg';

import mu from '../../images/manchester.png';
import ju from '../../images/juventus.png';

let list = [
  {
    time: '16:32',
    icon: red_card,
    name: 'Red Card',
    player: 'Mario Mandžukić',
    team_icon: ju,
    position: 16.5 / 60
  },
  {
    time: '22:57',
    icon: yellow_card,
    name: 'Yellow Card',
    player: 'Jesse Lingard',
    team_icon: mu,
    position: 22.9 / 60
  },
  {
    time: '34:00',
    icon: change_icon,
    name: 'Change Player',
    player: 'Lingard - Martial',
    team_icon: mu,
    position: 34 / 60
  },
  {
    time: '54:46',
    icon: soccer_goal,
    name: 'GOAL',
    player: 'Mario Mandžukić',
    team_icon: ju,
    position: 54.7 / 60
  }
];

const TimeStamp = ({ position, percent, text }) => {
  const gray = '#4e4e4e';
  let scale = chroma.scale(['037b33', 'ffc500', 'ec0000']);
  let color = scale(position).hex();

  if (position > percent) {
    color = gray;
  }

  return (
    <div
      className="time-stamp"
      style={{ left: `calc(${position * 100}% - 22px)` }}
    >
      <div className="line" style={{ backgroundColor: color }} />
      <span className="text" style={{ color: color }}>
        {' '}
        {text}{' '}
      </span>
    </div>
  );
};

const Incident = ({ incident }) => {
  return (
    <div
      className="incident"
      style={{ left: `calc(${incident.position * 100}%)` }}
    >
      <div className="content">
        <img
          className="incident-icon"
          src={incident.icon}
          alt="incident icon"
        />
        <div className="info">
          <div className="flex time-name">
            <div className="time">{incident.time}</div>
            <div className="name">{incident.name}</div>
          </div>
          <div className="flex player">
            <img src={incident.team_icon} alt="team icon" />
            <span className="name">{incident.player}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeLine = () => {
  const [now, setNow] = useState(new Date().getMinutes());
  let scale = chroma.scale(['037b33', 'ffc500', 'ec0000']);

  const percent = now / 60;
  let color = scale(percent).hex();

  let interval = null;
  if (!interval) {
    interval = setInterval(() => {
      setNow(new Date().getMinutes());
    }, 1000);
  }

  return (
    <section className="time-line">
      {list.map((item, index) => {
        return <Incident key={index} incident={item} />;
      })}
      <div className="gray-line" style={{ width: `${100 - percent * 100}%` }} />
      <div
        className="dot"
        style={{
          left: `calc(${percent * 100}%)`,
          backgroundColor: color,
          boxShadow: `0 0 2px 1px rgba(0,0,0,0.2), 0 0 6px 3px ${color}`
        }}
      />
      <TimeStamp position={0} percent={percent} text="START" />
      <TimeStamp position={15 / 60} percent={percent} text="15'" />
      <TimeStamp position={30 / 60} percent={percent} text="30'" />
      <TimeStamp position={45 / 60} percent={percent} text="45'" />
      <TimeStamp position={1} percent={percent} text="60'" />
    </section>
  );
};

export default TimeLine;
