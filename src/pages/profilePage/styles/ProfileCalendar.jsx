import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card, BoxShadow } from '../../../constants/Mixins';
import 'react-week-calendar/dist/style.less';

export const ProfileCalendarWrapper = styled.div`
  ${Card()}
  ${BoxShadow}
  margin-bottom: 32px;

  ${breakpoint('mobile', 'tablet')`
    padding: 24px 16px;
  `}
`;

export const ProfileCalendarHeading = styled.div`
  font-family: 'Anderson Grotesk';
  font-size: 32px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.dark1};
`;

export const ProfileCalendarText = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.dark2};
`;

export const ProfileCalendarImg = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.dark3};
  border-radius: 3px;
`;

export const ProfileCalendarEventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ color, theme }) => (color ? color : theme.light2)};
`;

export const EventTimeWrapper = styled.div``;

export const EventLocationWrapper = styled.div``;

export const EventCourseWrapper = styled.div``;

export const EventSectionWrapper = styled.div``;
