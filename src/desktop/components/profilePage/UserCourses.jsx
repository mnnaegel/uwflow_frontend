import React from 'react';
import { connect } from 'react-redux';

/* Selectors */
import { getUserCoursesTakenInfo } from '../../../data/reducers/UserReducer';

/* Styled Components */
import { UserCoursesWrapper, UserCoursesHeader } from './styles/ProfilePage';

const mapStateToProps = state => ({
  courses: getUserCoursesTakenInfo(state),
});

const UserCourses = ({ courses }) => {
  return (
    <UserCoursesWrapper>
      <UserCoursesHeader>My Courses</UserCoursesHeader>
    </UserCoursesWrapper>
  );
};

export default connect(mapStateToProps)(UserCourses);
