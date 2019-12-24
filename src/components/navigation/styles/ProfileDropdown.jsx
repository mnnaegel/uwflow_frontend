import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {
  Heading4,
  BoxShadow,
  DarkBoxShadow,
  Hover,
} from '../../../constants/Mixins';
import { getKittenFromID } from '../../../utils/Kitten';

export const ProfileDropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: 0;
  border: none;
  margin-left: 40px;

  ${breakpoint('mobile', 'tablet')`
    margin-left: 24px;
  `}
`;

export const ProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-image: url(${({ id }) => id && getKittenFromID(id)});
  background-size: 40px;
  ${({ isLanding }) => (isLanding ? DarkBoxShadow : BoxShadow)}
  ${Hover()}
`;

export const ProfileText = styled.div`
  ${Heading4}
  color: white;
  color: ${({ theme, isLanding }) => (isLanding ? theme.white : theme.dark1)};
  text-decoration: none;
  display: flex;
  align-items: center;
  width: max-content;
  z-index: 1;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.primary};
  }
`;
