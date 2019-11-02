import React from 'react';
import PropTypes from 'prop-types';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider';
import { withTheme } from 'styled-components';

import {
  DiscreteSliderWrapper,
  SliderBarWrapper,
  SliderRail,
  SliderHandle,
  SliderTick,
  SliderTrack
} from './styles/DiscreteSlider';

const Handle = ({
  handle: { id, percent }, 
  getHandleProps,
  color
}) => (
  <SliderHandle percent={percent} color={color} {...getHandleProps(id)} />
);

const Track = ({ source, target, color, getTrackProps }) => (
  <SliderTrack target={target} source={source} color={color} {...getTrackProps()} />
);
 
const DiscreteSlider = ({
  theme,
  numNodes,
  currentNode,
  color,
  onUpdate,
  margin="0 0 40px 0",
  showTicks=true
}) => {
  const percentGap = numNodes > 1 ? 100 / (numNodes - 1) : 100;

  let percentages = [];
  for (let i = 0; i < 100; i += percentGap) {
    percentages.push(i);
  }
  percentages.push(100);

  return (
    <DiscreteSliderWrapper margin={margin}>
      <SliderBarWrapper>
        <Slider
          step={1}
          mode={2}
          domain={[0, numNodes - 1]}
          onUpdate={onUpdate}
          values={[currentNode]}
          rootStyle={{
            position: 'relative',
            width: '100%',
            height: '8px'
          }}
        >
          <Rail>
            {({ getRailProps }) => (
              <>
                <SliderRail {...getRailProps()} /> 
                {showTicks && percentages.map((percent, idx) => (
                  <SliderTick
                    key={percent}
                    color={idx <= currentNode ? color : theme.light3}
                    percent={percent}
                    {...getRailProps()}
                  />
                ))}
              </>
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    getHandleProps={getHandleProps}
                    color={color}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    color={color}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </SliderBarWrapper>
    </DiscreteSliderWrapper>
  );
};

DiscreteSlider.propTypes = {
  theme: PropTypes.object.isRequired,
  margin: PropTypes.string,
  numNodes: PropTypes.number.isRequired, // includes 0 so 6 for 0 20 40 60 80 100
  currentNode: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  showTicks: PropTypes.bool
};

export default withTheme(DiscreteSlider);