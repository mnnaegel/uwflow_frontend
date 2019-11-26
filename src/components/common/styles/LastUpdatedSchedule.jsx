import styled from 'styled-components';
import { Body, Link } from '../../../constants/Mixins';

export const LastUpdatedText = styled.div`
  ${Body}
  color: ${({ theme }) => theme.dark3};
  margin-bottom: 32px;
  padding: 0 16px;
`;

export const LastUpdatedLink = styled.a`
  ${Link}
  color: ${({ theme }) => theme.dark3};
`;