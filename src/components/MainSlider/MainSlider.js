import React, { useState } from 'react';
import Carousel from 'nuka-carousel';
import SlideMatchResult from './SlideMatchResult';
import SlideVersus from './SlideVersus';
import './MainSlider.scss';

const MainSlider = props => {
  const slides = [<SlideVersus />, <SlideMatchResult />];
  const [slide, setSlide] = useState(0);
  const autoplayInterval = 5000;
  const SLIDES_COUNT = slides.length;

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
    <section className="main-slider">
      <Carousel
        dragging={false}
        autoplay={true}
        autoplayInterval={autoplayInterval}
        renderCenterLeftControls={() => (
          <i
            className="fas fa-chevron-left aside-arrow"
            onClick={onPrevClick}
          />
        )}
        renderCenterRightControls={() => (
          <i
            className="fas fa-chevron-right aside-arrow"
            onClick={onNextClick}
          />
        )}
        renderBottomCenterControls={() => (
          <ul className="bottom-dots">
            {slides.map((item, index) => (
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
        {slides.map(item => {
          return item;
        })}
      </Carousel>
    </section>
  );
};

export default MainSlider;
