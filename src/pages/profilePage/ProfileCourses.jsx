import React from 'react';
import PropTypes from 'prop-types';
import { PlusSquare } from 'react-feather';
import { withTheme } from 'styled-components';

/* Child Components */
import TabContainer from '../../components/display/TabContainer';
import Button from '../../components/input/Button';
import LikeCourseToggle from '../../components/input/LikeCourseToggle';

/* Styled Components */
import {
  ProfileCoursesWrapper,
  ProfileCoursesCourse,
  ProfileCourseText,
  ProfileCourseCode,
  ProfileCourseName,
  ProfileCourseLiked,
  LikedThisCourseText,
  AddReviewIcon,
  ProfileCourseReviewButtonText,
  ReviewButtonContents,
  LikeToggleWrapper,
  LikedCourseWrapper
} from './styles/ProfileCourses';

import { termCodeToDate, splitCourseCode, processLiked } from '../../utils/Misc';
import { getCoursePageRoute } from '../../Routes';

const groupByTerm = courses => {
  return courses.reduce((groups, course) => {
    groups[course.term] = groups[course.term] || [];
    groups[course.term].push(course);
    return groups;
  }, {});
};

const ProfileCourses = ({ theme, courses, setReviewCourse, openModal }) => {
  const unorderedGroups = groupByTerm(courses);
  const courseGroups = {};
  Object.keys(unorderedGroups).sort().reverse().forEach(term => {
    courseGroups[termCodeToDate(term)] = unorderedGroups[term];
  });

  const tabList = Object.keys(courseGroups).map(termName => {
    return {
      title: termName,
      render: () => {
        return courseGroups[termName].map((course_taken, idx) => (
          <ProfileCoursesCourse key={idx}>
            <ProfileCourseText>
              <ProfileCourseCode to={getCoursePageRoute(course_taken.course.code)}>
                {splitCourseCode(course_taken.course.code)}
              </ProfileCourseCode>
              <ProfileCourseName>{course_taken.course.name}</ProfileCourseName>
            </ProfileCourseText>
            <LikedCourseWrapper>
              <ProfileCourseLiked>
                {processLiked(course_taken.course.course_reviews_aggregate.aggregate.avg.liked)}
              </ProfileCourseLiked>
              <LikedThisCourseText>
                liked this
                <br />
                course
              </LikedThisCourseText>
            </LikedCourseWrapper>
            <LikeToggleWrapper>
              <LikeCourseToggle courseID={course_taken.course.id} initialState={true} />
            </LikeToggleWrapper>
            <Button
              margin="auto 0 auto 16px"
              padding="8px"
              height={48}
              maxHeight={48}
              handleClick={() => {
                setReviewCourse(idx);
                openModal();
              }}
            >
              <ReviewButtonContents>
                <AddReviewIcon>
                  <PlusSquare color={theme.dark2} size={24} strokeWidth={2} />
                </AddReviewIcon>
                <ProfileCourseReviewButtonText>
                  Add review
                </ProfileCourseReviewButtonText>
              </ReviewButtonContents>
            </Button>
          </ProfileCoursesCourse>
        ));
      },
    };
  });

  return tabList.length > 0 ? (
    <ProfileCoursesWrapper>
      <TabContainer tabList={tabList} contentPadding="0" />
    </ProfileCoursesWrapper>
  ) : null;
};

ProfileCourses.propTypes = {
  theme: PropTypes.object.isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
  setReviewCourse: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default withTheme(ProfileCourses);
