import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

/* Styled Components */
import {
  ProfPageWrapper,
  ColumnWrapper,
  Column1,
  Column2,
} from './styles/ProfPage';

/* Child Components */
import ProfInfoHeader from './ProfInfoHeader';
import ProfReviews from './ProfReviews';

/* Graphql Queries */
import { GET_PROF } from '../../../graphql/queries/prof/Prof';

const ProfPageContent = ({ prof, profID }) => {
  return (
    <>
      <ProfInfoHeader prof={prof} />
      <ColumnWrapper>
        <Column1>
          <ProfReviews profID={profID} />
        </Column1>
        <Column2 />
      </ColumnWrapper>
    </>
  );
};

const ProfPage = ({ match }) => {
  const profID = match.params.profID;

  return (
    <ProfPageWrapper>
      <Query query={GET_PROF} variables={{ id: profID }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Loading...</div>;
          }
          if (error) {
            return <div>Error</div>;
          }
          if (data.prof.length === 0) {
            return <div>Course Doesn't Exist</div>;
          }

          const prof = {
            ...data.prof[0],
            reviewsAggregate: data.prof_review_aggregate,
          };
          return <ProfPageContent prof={prof} profID={profID} />;
        }}
      </Query>
    </ProfPageWrapper>
  );
};

ProfPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ courseID: PropTypes.string }),
  }),
};

export default withRouter(ProfPage);
