import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { formatDateString } from '../../helpers';
import { Hour } from './Hour';
import React, { useEffect, useRef, useState } from 'react';
export function Day({ date, weatherData }) {
  const [isWidthLarger, setIsWidthLarger] = useState(false);
  const [showWeather, setShowWeather] = useState(false);

  const scrollContainerRef = useRef(null);
  const dayWrapperRef = useRef(null);

  const CheckContainerWidth = () => {
    const dayWrapper = dayWrapperRef.current;
    const dayWrapperRight = dayWrapper.getBoundingClientRect().right;

    let totalChildWidth = 0;
    const scrollContainer = scrollContainerRef.current;
    const children = scrollContainer.children;
    const gap = parseFloat(getComputedStyle(scrollContainer).gap);
    const padding = parseFloat(getComputedStyle(scrollContainer).padding) * 2;
    const gapWidth = (children.length - 1) * gap;

    for (let child of children) {
      totalChildWidth += child.getBoundingClientRect().width;
    }

    totalChildWidth += gapWidth + padding;

    if (totalChildWidth > dayWrapperRight) {
      setIsWidthLarger(true);
    } else {
      setIsWidthLarger(false);
    }
  };

  useEffect(() => {
    CheckContainerWidth();
    window.addEventListener('resize', CheckContainerWidth);

    return () => {
      window.removeEventListener('resize', CheckContainerWidth);
    };
  }, []);

  const handleShowWeather = () => {
    setShowWeather(!showWeather);
  };

  const scrollStyle = {
    width: !isWidthLarger ? 'fit-content' : '',
    display: showWeather ? 'flex' : '',
  };

  return (
    <div className='day-wrapper' ref={dayWrapperRef}>
      <div className='date-container'>
        <h2 className='date'>{formatDateString(date)}</h2>
        <button
          type='button'
          className='show-weather'
          onClick={handleShowWeather}
        >
          {showWeather ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>
      <div
        className='scrolling-container'
        ref={scrollContainerRef}
        style={scrollStyle}
      >
        {weatherData.map((item) => (
          <Hour key={item.dt} item={item} />
        ))}
      </div>
    </div>
  );
}
