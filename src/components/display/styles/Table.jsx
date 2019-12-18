import styled from 'styled-components';
import { Link } from '../../../constants/Mixins';

export const TableWrapper = styled.div`
  display: table;
  border-spacing: 2px;
  width: 100%;
  min-width: 100%;
  border-radius: 4px;
  text-align: left;
  table-layout: auto;
  border-collapse: collapse;
  color: ${({ theme }) => theme.dark2};
`;

export const TableHeader = styled.div`
  display: table-header-group;
  vertical-align: middle;
  border-radius: 4px;
  width: 100%;
`;

export const HeaderRow = styled.div`
  display: table-row;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.light3};
`;

export const HeaderCell = styled.div`
  display: table-cell;
  text-align: ${({ align }) => (align ? align : 'left')};
  padding-top: 16px;
  padding-bottom: 16px;
  vertical-align: top;
  font-weight: 600;
  white-space: nowrap;
  padding-left: ${({ align }) => (align === 'right' ? '8px' : '0')};
  padding-right: ${({ align }) => (align === 'right' ? '0' : '8px')};
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : '0')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};

  &:first-child {
    padding-left: 16px;
    padding-right: 16px;
  }

  &:last-child {
    padding-left: 0;
    padding-right: 16px;
  }
`;

export const HeaderText = styled.span`
  ${({ sortable }) => (sortable ? Link : '')}
  cursor: ${({ sortable }) => (sortable ? 'pointer' : 'inherit')};
  color: ${({ theme, sortable }) => (sortable ? theme.primary : theme.dark1)};

  &:hover, &:focus {
    color: ${({ theme, sortable }) =>
      sortable ? theme.primaryDark : theme.dark1};
  }
`;

export const SortArrow = styled.span`
  color: ${({ theme }) => theme.primary};
  margin-left: 4px;
  vertical-align: middle;
`;

export const TableBody = styled.div`
  width: 100%;
  display: table-row-group;
  vertical-align: middle;
`;

export const Row = styled.div`
  display: table-row;
  position: relative;
  width: 100%;
  border-radius: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.light3};
  background-color: ${({ theme, odd }) => (odd ? theme.white : '#FAFBFC')};

  &:last-child {
    border-bottom: none;
  }
`;

export const Cell = styled.div`
  display: table-cell;
  padding: ${({ padding }) => (padding ? padding : '8px 0')};
  padding-left: ${({ align }) => (align === 'right' ? '8px' : '0')};
  padding-right: ${({ align }) => (align === 'right' ? '0' : '8px')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};

  text-align: ${({ align }) => (align ? align : 'left')};
  vertical-align: top;
  height: 0;

  &:first-child {
    padding-left: 16px;
  }

  &:last-child {
    padding-right: 16px;
  }

  &:only-child {
    padding: 0 16px;
    column-span: all;
  }
`;

export const LoadingRow = styled.div`
  display: table-caption;
  caption-side: bottom;
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 0 4px 4px 0;
`;
