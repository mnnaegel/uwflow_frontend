import React from 'react';
import { useQuery } from 'react-apollo';
import PropTypes from 'prop-types';

/* Child Components */
import TabContainer from '../common/TabContainer';
import Table from '../common/Table';
import { courseScheduleTableColumns } from './CourseScheduleTableColumns';

/* Styled Components */
import { ScheduleTable, CourseScheduleWrapper } from './styles/CourseSchedule';

/* GraphQL Queries */
import { GET_COURSE_SCHEDULE } from '../../../graphql/queries/course/Course';

const columnNames = [
  'Section',
  'Class',
  'Enrolled',
  'Time',
  'Date',
  'Location',
  'Instructor',
];

const secsToTime = secs =>
  `${Math.floor(secs / 3600) % 12}:${Math.floor((secs % 3600) / 60) % 60} ${
    secs >= 3600 * 12 ? 'PM' : 'AM'
  }`;

const CourseSchedule = ({ courseID }) => {
  const { loading, error, data } = useQuery(GET_COURSE_SCHEDULE, {
    variables: { id: courseID },
  });

  const sections = data.course[0].sections;
  if (!sections) {
    return null;
  }
  const termsOffered = sections.reduce((allTerms, curr) => {
    if (!allTerms.includes(curr.term)) {
      allTerms.push(curr.term);
    }
    return allTerms;
  }, []);
  console.log(sections);
  const sectionsCleanedData = sections.map(s => ({
    term: s.term,
    section: s.section,
    c: s.class_number,
    enrolled: { capacity: s.enrollment_capacity, filled: s.enrollment_total },
    classes: s.classes.map(cl => ({
      time: {
        start: secsToTime(cl.start_seconds),
        end: secsToTime(cl.end_seconds),
      },
      date: cl.days,
      location: cl.location,
      instructor: cl.prof_id,
    })),
  }));
  console.log(sectionsCleanedData);
  console.log(courseScheduleTableColumns);
  console.log(sectionsCleanedData.filter(c => c.term === 1195));

  const tabList = termsOffered.map(term => {
    return {
      title: term.toString(),
      render: () => (
        <Table
          columns={courseScheduleTableColumns}
          data={sectionsCleanedData.filter(c => c.term === term)}
        />
      ),
    };
  });

  return (
    <CourseScheduleWrapper>
      <TabContainer
        initialSelectedTab={0}
        tabList={tabList}
        contentPadding={'0'}
      />
    </CourseScheduleWrapper>
  );
};

CourseSchedule.propTypes = {
  courseID: PropTypes.string.isRequired,
};

export default CourseSchedule;
