import React from 'react';

/* Styled Components */
import {
  LoadingSpinnerWrapper,
  CircularSvg,
  CircleSvgBackground,
  CircleSvgSpinner,
} from './styles/LoadingSpinner';

const LoadingSpinner = ({
  margin = '32px auto',
  size = 48,
  strokeWidth = 4,
  spinnerColor = null,
  backgroundColor = null
}) => {
  return (
    <LoadingSpinnerWrapper margin={margin} size={size}>
      <CircularSvg viewBox={`${size/2} ${size/2} ${size} ${size}`}>
        <CircleSvgBackground
          cx={size}
          cy={size}
          r={size/4}
          fill="none"
          strokeWidth={strokeWidth}
          color={backgroundColor}
        />
        <CircleSvgSpinner
          cx={size}
          cy={size}
          r={size/4}
          fill="none"
          strokeWidth={strokeWidth}
          color={spinnerColor}
        />
      </CircularSvg>
    </LoadingSpinnerWrapper>
  );
};

export default LoadingSpinner;