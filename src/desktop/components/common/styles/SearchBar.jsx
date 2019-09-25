import styled from 'styled-components';
import { BoxShadow, Body } from '../../../../constants/Mixins';

export const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: fit-content;
  z-index: 10;
`;

export const SearchResultsWrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${({ theme }) => theme.white};
  ${BoxShadow}
  border-radius:  0 0 4px 4px;
`;

export const SearchResult = styled.button`
  ${Body}
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.dark3};
  padding: 8px 16px;
  height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.light3};

  &:last-child {
    border-radius:  0 0 4px 4px;
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.light1} !important;
    border-bottom: none;
  }

  &:hover span {
    color: ${({ theme }) => theme.light1} !important;
  }
`;

export const ExploreText = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

export const CourseText = styled.span`
  color: ${({ theme }) => theme.courses};
  font-weight: 600;
`;

export const ProfText = styled.span`
  color: ${({ theme }) => theme.professors};
  font-weight: 600;
`;

export const Dash = styled.span`
  margin: 0 4px;
`;
