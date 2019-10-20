import styled from 'styled-components';
import { Body, BoxShadow } from '../../../../constants/Mixins';

export const RatingBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${({ withShadow }) => withShadow ? BoxShadow : ''}
`;

export const CircularPercentageWrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RatingBarsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px 8px 0;

  &:first-child {
    margin-top: 16px;
  }
`;

export const ProgressTextLabel = styled.div``;

export const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressNumberLabel = styled.div`
  ${Body};
  margin: 8px;
`;

export const ReviewsAndGraphButtonWrapper = styled.div`
  display: flex;
`;

export const NumCommentsAndRatingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 16px 0;
`;

export const NumCommentsWrapper = styled.div`
  ${Body}
  color: ${({ theme }) => theme.dark3};
  margin-bottom: 8px;
`;

export const NumRatingsWrapper = styled.div`
  ${Body};
  color: ${({ theme }) => theme.dark3};
`;
