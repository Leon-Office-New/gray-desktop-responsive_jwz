import React, { useState } from 'react';
import Carousel from 'nuka-carousel';

import './MainSlider.scss';

const MainSlider = props => {
  const [slide, setSlide] = useState(0);
  const autoplayInterval = 5000;
  const SLIDES_COUNT = 4;

  const onPrevClick = () => {
    if (slide - 1 === -1) {
      setSlide(SLIDES_COUNT - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  const onNextClick = () => {
    if (slide + 1 === SLIDES_COUNT) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const afterSlide = slideIndex => {
    setSlide(slideIndex);
    if (slideIndex + 1 === SLIDES_COUNT) {
      setTimeout(() => {
        setSlide(0);
      }, autoplayInterval);
    }
  };

  return (
    <div className="main-slider">
      <Carousel
        autoplay={true}
        autoplayInterval={autoplayInterval}
        renderCenterLeftControls={() => (
          <i
            className="fas fa-chevron-left aside-arrow"
            onClick={onPrevClick}
          ></i>
        )}
        renderCenterRightControls={() => (
          <i
            className="fas fa-chevron-right aside-arrow"
            onClick={onNextClick}
          ></i>
        )}
        renderBottomCenterControls={() => (
          <ul className="bottom-dots">
            {[1, 2, 3, 4].map((item, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: index === slide ? '#fefefe' : 'transparent'
                }}
                onClick={() => setSlide(index)}
              />
            ))}
          </ul>
        )}
        slideIndex={slide}
        afterSlide={afterSlide}
        height={'100%'}
      >
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              key={index}
              style={{
                height: '380px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'orangered',
                color: 'black'
              }}
            >
              <h3>{item}</h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MainSlider;
