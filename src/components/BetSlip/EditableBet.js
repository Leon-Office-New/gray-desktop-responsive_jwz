import React from 'react';

import sport_icon from '../../images/soccer-ball-variant.svg';

const EditableBet = ({ text }) => {
  return (
    <div className="editable-bet">
      <div className="flex league">
        <img src={sport_icon} alt="sport-icon" />
        <span className="name">כדורגל - ..אופ״א ליגת האלופות</span>
        <i className="fas fa-times"></i>
      </div>
      <div className="flex teams">
        <span className="live">{text.live}</span>
        <span className="flex score">
          <span>1</span>
          <span>:</span>
          <span>0</span>
        </span>
        <div className="flex names">
          <span className="name">מנצ'סטר יונייטד</span>
          <span className="secondary vs">VS</span>
          <span className="name">יובנטוס</span>
        </div>
      </div>
      <div className="flex secondary market">
        <span>אסייתי - סיום המשחק(שערים)</span>
      </div>
      <div className="info">
        <div className="flex string">
          <span className="name">מנצ'סטר יונייטד</span>
          <span className="value">1.88 @ -0.5</span>
        </div>
        <div className="flex string">
          <span className="flex with-input name">
            <span>{text.stake}</span>
            <div className="min-max">
              <div className="flex">
                <span>{text.min}</span>
                <span>200</span>
              </div>
              <div className="flex">
                <span>{text.max}</span>
                <span>10000</span>
              </div>
            </div>
          </span>
          <span className="value">
            <input />
          </span>
        </div>
        <div className="flex string">
          <span className="name">{text.win}</span>
          <span className="value">176</span>
        </div>
      </div>
    </div>
  );
};

export default EditableBet;
