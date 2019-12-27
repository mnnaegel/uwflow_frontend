import React from 'react';
import moment from 'moment';
import { useQuery } from 'react-apollo';

/* Styled Components */
import { LastUpdatedText, LastUpdatedLink } from './styles/LastUpdatedSchedule';

/* GraphQL */
import { UPDATE_TIME_QUERY } from '../../graphql/queries/common/UpdateTime';

const LastUpdatedSchedule = ({ margin = '8px 0 0 0' }) => {
  const { data, loading } = useQuery(UPDATE_TIME_QUERY);

  let updatedTime = null;
  if (!loading && data) {
    data.update_time.forEach(update => {
      if (!updatedTime || moment(update.time).isAfter(moment(updatedTime))) {
        updatedTime = update.time;
      }
    });
  }

  return (
    <LastUpdatedText margin={margin}>
      Last updated {updatedTime && moment(data.update_time[0].time).fromNow()}{' '}
      from{' '}
      <LastUpdatedLink
        href={'http://www.adm.uwaterloo.ca/infocour/CIR/SA/under.html'}
        target="_blank"
      >
        adm.uwaterloo.ca
      </LastUpdatedLink>
    </LastUpdatedText>
  );
};

export default LastUpdatedSchedule;
