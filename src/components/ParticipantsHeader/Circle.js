import React from 'react';
import chroma from 'chroma-js';

const Circle = ({ percent, children }) => {
  let lines = [];
  let scale = chroma.scale(['037b33', 'ffc500', 'ec0000']);
  const gray = '#4e4e4e';

  let lastColor = '',
    currentColor = '';
  let dotDeg = 0;
  let dotColor = scale(0).hex();
  for (let i = 0; i < 360; i++) {
    const currentPercent = i / 360;
    lastColor = currentColor;
    currentColor = scale(currentPercent).hex();
    if (currentPercent <= percent) {
      currentColor = gray;
    }
    const isFirst = currentColor !== gray && lastColor === gray;
    if (isFirst) {
      dotDeg = i;
      dotColor = currentColor;
    }

    lines.push(
      <div
        key={i}
        className="line"
        style={{
          backgroundColor: currentColor,
          transform: `rotate(${i}deg)`
        }}
      ></div>
    );
  }

  // console.log('dot deg', dotDeg);

  return (
    <div className="circle">
      {lines.map(item => item)}
      <div className="text">{children}</div>
      <div
        className="line-with-dot"
        style={{ transform: `rotate(${dotDeg}deg)` }}
      >
        <div
          className="dot"
          style={{
            backgroundColor: dotColor,
            boxShadow: `0 0 2px 1px rgba(0,0,0,0.2), 0 0 8px 4px ${dotColor}`
          }}
        />
      </div>
    </div>
  );
};

export default Circle;
