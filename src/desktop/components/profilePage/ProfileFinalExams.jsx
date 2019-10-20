import React from 'react';
import PropTypes from 'prop-types';

/* Styled Components */
import {
  ProfileFinalExamsWrapper,
  ProfileFinalExamsHeader,
  ProfileFinalExamsContent,
} from './styles/ProfileFinalExams';

import FinalExamTable from '../../../sharedComponents/coursePage/FinalExamTable';
import LastUpdatedSchedule from '../../../sharedComponents/coursePage/LastUpdatedSchedule';

const ProfileFinalExams = ({ courses }) => {
  return (
    <>
      <ProfileFinalExamsWrapper>
        <ProfileFinalExamsHeader>
          On campus final exams
        </ProfileFinalExamsHeader>
        <ProfileFinalExamsContent>
          <FinalExamTable courses={courses} />
        </ProfileFinalExamsContent>
      </ProfileFinalExamsWrapper>
      <LastUpdatedSchedule />
    </>
  );
};

ProfileFinalExams.propTypes = {
  courses: PropTypes.array.isRequired
};

export default ProfileFinalExams;
