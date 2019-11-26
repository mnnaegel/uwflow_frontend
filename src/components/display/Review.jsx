import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { ThumbsUp } from 'react-feather';
import moment from 'moment';

/* Selectors */
import { getIsBrowserDesktop } from '../../data/reducers/BrowserReducer';
import { getIsLoggedIn } from '../../data/reducers/AuthReducer';
import { authModalOpen } from '../../data/actions/AuthActions';

/* Styled Components */
import {
  ReviewWrapper,
  ReviewPictureAndMetricsRow,
  ReviewTextWrapper,
  ReviewMetricsWrapper,
  ReviewMetricsBody,
  ReviewPictureAndUpvotesWrapper,
  ReviewPicture,
  ReviewUpvotes,
  ReviewText,
  ReviewAuthor,
  UpvoteNumber,
  SingleMetricWrapper,
  SingleMetricSquares,
  SingleMetricLabel,
} from './styles/Review';

/* Child Components */
import BubbleRatings from '../input/BubbleRatings';

const mapStateToProps = state => ({
  isBrowserDesktop: getIsBrowserDesktop(state),
  isLoggedIn: getIsLoggedIn(state),
});

const MetricIfExists = (metrics, metric) => {
  if (metrics[metric] !== null && metrics[metric] !== undefined) {
    if (metrics[metric] === true || metrics[metric] === false) {
      return (
        <SingleMetricWrapper>
          <SingleMetricSquares>
            <BubbleRatings boolRating={metrics[metric]} />
          </SingleMetricSquares>
          <SingleMetricLabel>
            {metric === 'liked' ? 'Liked' : metric}?
          </SingleMetricLabel>
        </SingleMetricWrapper>
      );
    } else {
      return (
        <SingleMetricWrapper>
          <SingleMetricSquares>
            <BubbleRatings total={5} rating={metrics[metric]} />
          </SingleMetricSquares>
          <SingleMetricLabel>
            {' '}
            {metric.charAt(0).toUpperCase() + metric.slice(1)}?
          </SingleMetricLabel>
        </SingleMetricWrapper>
      );
    }
  }
};

const Review = ({
  review,
  theme,
  isBrowserDesktop,
  isLoggedIn
}) => {
  const { upvotes, upvote_users, review: reviewText, author, created_at, metrics } = review;
  const userID = localStorage.getItem('user_id');

  const dispatch = useDispatch();
  const [userUpvoted, setUserUpvoted] = useState(upvote_users.includes(userID));

  const onClickUpvote = () => {
    if (!isLoggedIn) {
      dispatch(authModalOpen());
      return;
    }

    if (userUpvoted) {
    } else {
    }
    setUserUpvoted(!userUpvoted);
  }

  const authorNameText = author.full_name ? `-${author.full_name}` : '-Anonymous';
  const reviewContent = (
    <ReviewTextWrapper>
      <ReviewText>{reviewText}</ReviewText>
      <ReviewAuthor>
        {authorNameText}{author.program ? `, a ${author.program} student` : ''}
        , {moment(created_at).fromNow()}
      </ReviewAuthor>
    </ReviewTextWrapper>
  );

  return (
    <ReviewWrapper>
      <ReviewPictureAndMetricsRow>
        <ReviewPictureAndUpvotesWrapper>
          <ReviewPicture />
          <ReviewUpvotes selected={userUpvoted} onClick={onClickUpvote}>
            <ThumbsUp
              color={userUpvoted ? 'white' : theme.dark3}
              size={16}
              strokeWidth={2}
            />
            <UpvoteNumber selected={userUpvoted}>
              {upvotes ? upvotes : 0}
            </UpvoteNumber>
          </ReviewUpvotes>
        </ReviewPictureAndUpvotesWrapper>
        {isBrowserDesktop && reviewContent}
        <ReviewMetricsWrapper>
          <ReviewMetricsBody>
            {MetricIfExists(metrics, 'clear')}
            {MetricIfExists(metrics, 'engaging')}
            {MetricIfExists(metrics, 'useful')}
            {MetricIfExists(metrics, 'easy')}
            {MetricIfExists(metrics, 'liked')}
          </ReviewMetricsBody>
        </ReviewMetricsWrapper>
      </ReviewPictureAndMetricsRow>
      {!isBrowserDesktop && reviewContent}
    </ReviewWrapper>
  );
};

Review.propTypes = {
  upvotes: PropTypes.number,
  review: PropTypes.shape({
    upvotes: PropTypes.number,
    review: PropTypes.string.isRequired,
    author: PropTypes.shape({
      full_name: PropTypes.string,
      program: PropTypes.string,
      picture_url: PropTypes.string
    }).isRequired,
    user: PropTypes.shape({
      user_id: PropTypes.number
    }),
    metrics: PropTypes.shape({
      useful: PropTypes.number, //not all these metrics have to exist, we should only display the ones that do
      easy: PropTypes.number, //for example course review only has useful, easy liked,
      liked: PropTypes.bool, //prof review only has liked, clear and engagin
      clear: PropTypes.number,
      engaging: PropTypes.number,
    }).isRequired,
  }).isRequired
};

export default withTheme(connect(mapStateToProps)(Review));