import React, { useState } from 'react';
import SportsMenu from '../../components/SportsMenu';

import BetSlip from '../../components/BetSlip';
import './InPlayGamePage.scss';

const InPlayGamePage = () => {
  const [percent, setPercent] = useState(0);

  const onHandleChange = event => {
    console.log(event.target.value);
    setPercent(event.target.value);
  };

  return (
    <main className="in-play-page in-play-game-page">
      <SportsMenu />
      <div className="container flex with-aside">
        <aside>
          <BetSlip />
        </aside>
        <main>
          <input
            value={percent}
            onChange={onHandleChange.bind(this)}
            type="number"
          />
          <div id="line" />

          <div>
            green Rgb rgb(3, 123, 51) Hex #037b33 Hsl hsl(144, 95%, 25%) Hwb
            hwb(144, 1%, 52%) Cmyk cmyk(98%, 0%, 59%, 52%) Ncol G40, 1%, 52%
          </div>
          <div>
            yellow Rgb rgb(255, 197, 0) Hex #ffc500 Hsl hsl(46, 100%, 50%) Hwb
            hwb(46, 0%, 0%) Cmyk cmyk(0%, 23%, 100%, 0%) Ncol R77, 0%, 0%
          </div>
          <div>
            red Rgb rgb(236, 0, 0) Hex #ec0000 Hsl hsl(0, 100%, 46%) Hwb hwb(0,
            0%, 7%) Cmyk cmyk(0%, 100%, 100%, 7%) Ncol R0, 0%, 7%
          </div>
        </main>
      </div>
    </main>
  );
};

export default InPlayGamePage;
