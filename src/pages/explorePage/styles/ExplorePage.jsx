import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Link as RouterLink } from 'react-router-dom';
import ExploreHeader from '../../../img/explore_v1.svg';

/* Mixins */
import { Heading2, PageContent, WideColumn, ThinColumn, Link } from '../../../constants/Mixins';

export const ExplorePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

export const ExploreHeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  background-color: ${({ theme }) => theme.primaryExtraDark};
  background: url(${ExploreHeader});
  background-size: cover;
  flex-direction: column;
  position: relative;

  ${breakpoint('mobile', 'tablet')`
    padding: 0 16px;
  `}
`;

export const ExploreHeaderText = styled.div`
  ${PageContent}
  ${Heading2}
  padding-top: 48px;
  padding-bottom: 16px;
  word-break: break-all;
  min-height: 104px;
  display: flex;
  flex-direction: row;
  margin: auto;
  position: relative;
  color: ${({ theme }) => theme.light1};
  font-weight: 400;
`;


export const ColumnWrapper = styled.div`
  ${PageContent}
  margin: auto;
  display: flex;
  flex-flow: row wrap;
`;

export const Column1 = styled.div`
  ${WideColumn}

  ${breakpoint('mobile', 'tablet')`
    width: 100%;
    padding: 0;
    order: 2;
  `}
`;

export const Column2 = styled.div`
  ${ThinColumn}

  ${breakpoint('mobile', 'tablet')`
    width: 100%;
    order: 1;
  `}
`;

export const CourseCode = styled(RouterLink)`
  ${Link}
  color: ${({theme}) => theme.courses};
`;

export const ProfName = styled(RouterLink)`
 ${Link}
  color: ${({theme}) => theme.professors};
`;
