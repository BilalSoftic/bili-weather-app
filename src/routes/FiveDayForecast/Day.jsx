import { formatDateString } from '../../helpers';
import { Hour } from './Hour';
import React, { useEffect, useRef, useState } from 'react';
export function Day({ date, weatherData }) {
  const [isWidthLarger, setIsWidthLarger] = useState(false);
  const scrollContainerRef = useRef(null);
  const dayWrapperRef = useRef(null);

  useEffect(() => {
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

      console.log(gap, padding);
      if (totalChildWidth > dayWrapperRight) {
        setIsWidthLarger(true);
      } else {
        setIsWidthLarger(false);
      }
    };

    CheckContainerWidth();
  }, [weatherData]);

  return (
    <div className='day-wrapper' ref={dayWrapperRef}>
      <h2 className='date'>{formatDateString(date)}</h2>
      <div
        className='scrolling-container'
        ref={scrollContainerRef}
        style={{ width: !isWidthLarger ? 'fit-content' : '' }}
      >
        {weatherData.map((item) => (
          <Hour key={item.dt} item={item} />
        ))}
      </div>
    </div>
  );
}
