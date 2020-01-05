import React from 'react';
import PropTypes from 'prop-types';
import { ThumbsUp, ThumbsDown } from 'react-feather';

/* Styled Components */
import {
  BubbleRatingsWrapper,
  UnitCircle,
  ThumbsWrapper,
  Thumb,
} from './styles/BubbleRatings';

const Thumbs = ({ boolRating }) => (
  <ThumbsWrapper>
    <Thumb colored={boolRating === true}>
      <ThumbsUp width={20} height={20} strokeWidth={3} fill="white" />
    </Thumb>
    <Thumb colored={boolRating === false}>
      <ThumbsDown width={20} height={20} fill="white" />
    </Thumb>
  </ThumbsWrapper>
);

const Circles = ({ rating, total }) => (
  <>
    {Array.apply(null, Array(total)).map((_, ind) => {
      return <UnitCircle key={ind} filled={ind < rating} diameter={16} />;
    })}
  </>
);

const BubbleRatings = ({ total = 5, rating, boolRating }) => {
  return (
    <BubbleRatingsWrapper>
      {boolRating === true || boolRating === false ? (
        <Thumbs boolRating={boolRating} />
      ) : (
        <Circles rating={rating} total={total} />
      )}
    </BubbleRatingsWrapper>
  );
};

BubbleRatings.propTypes = {
  total: PropTypes.number, // int total that the rating is out of (5 for us rn)
  rating: PropTypes.number, // int rating that is given (out of 5)
  boolRating: PropTypes.bool, //This will be not null/undefined if we want to use this intead of a number out of 5
};

export default BubbleRatings;