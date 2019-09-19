import React, { useState, useEffect } from 'react';
import Circle from './Circle';
import './ParticipantsHeader.scss';

const ParticipantsHeader = () => {
  const [now, setNow] = useState(new Date().getSeconds());

  // setInterval(() => {
  //   setNow(new Date())
  // }, 1000);

  // const hour = 3600
  // const mins = now.getMinutes()
  // const seconds = now.getSeconds()
  // const nowSeconds = seconds + mins * 60

  const percent = now / 60;

  let interval = null;
  if (!interval) {
    setInterval(() => {
      setNow(new Date().getSeconds());
    }, 1000);
  }

  // console.log(percent)
  // useEffect(() => {
  //   setNow(new Date().getSeconds())
  //   return () => {
  //     // cleanup
  //   };
  // }, [now])

  return (
    <section className="participants-header">
      <Circle percent={percent}>
        <div className="flex score">
          <span>2</span>
          <span>:</span>
          <span>1</span>
        </div>
        <div className="time">{`${new Date().toLocaleTimeString()}`}</div>
      </Circle>
    </section>
  );
};

export default ParticipantsHeader;
