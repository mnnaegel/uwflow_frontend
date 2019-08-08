import styled from 'styled-components';
import { BoxShadow, Heading3, Heading4, Body } from '../../../../constants/Mixins';

export const SearchFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 32px;
  margin-bottom: 32px;
  background-color: ${({theme}) => theme.white};
  ${BoxShadow}  
`;

export const SearchFilterHeader = styled.div`
  ${Heading3}
  color: ${({theme}) => theme.dark1};
  margin-bottom: 24px;
`;

export const SearchFilterText = styled.div`
  ${Heading4}
  color: ${({theme}) => theme.dark2};
  margin-bottom: 8px;
`;

export const SearchFilterSection = styled.div`
  display: block;
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const CourseFilterDropdown = styled.span`
  position: absolute;
`;

export const NumRatingsText = styled.span`
  ${Body}
  color: ${({theme}) => theme.dark3};
`;

export const NumRatingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;