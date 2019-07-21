import React from 'react';
import PropTypes from 'prop-types';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'

import {
  DiscreteSliderWrapper,
  DiscreteSliderTitle,
  SliderBarWrapper,
  SliderNodeText,
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
  title,
  numNodes,
  currentNode,
  nodeText,
  color,
  onUpdate,
  margin="0 0 40px 0"
}) => {
  let percentages = [];
  for (let i = 0; i < 100; i += 100 / (numNodes - 1)) {
    percentages.push(i);
  }
  percentages.push(100);

  return (
    <DiscreteSliderWrapper margin={margin}>
      <DiscreteSliderTitle>{title}</DiscreteSliderTitle>
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
                {percentages.map(percent => (
                  <SliderTick color={color} percent={percent} {...getRailProps()} />
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
      <SliderNodeText>{nodeText[currentNode]}</SliderNodeText>
    </DiscreteSliderWrapper>
  );
};

DiscreteSlider.propTypes = {
  title: PropTypes.string,
  margin: PropTypes.string,
  numNodes: PropTypes.number.isRequired, // includes 0 so 6 for 0 20 40 60 80 100
  currentNode: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  nodeText: PropTypes.arrayOf(PropTypes.string).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default DiscreteSlider;
