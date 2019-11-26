import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Table from '../../components/display/Table';
import TabContainer from '../../components/display/TabContainer';
import { courseColumns, profColumns } from './ExploreTableData';

import { getCurrentTermCode, getNextTermCode } from '../../utils/Misc';

import { SearchResultsContent } from './styles/SearchResults';

const currentTermCode = getCurrentTermCode();
const nextTermCode = getNextTermCode();

const SearchResults = ({
  filterState,
  data,
  exploreTab,
  setExploreTab,
  ratingFilters,
  profCourses,
  loading,
  fetchMore
}) => {
  const courses = data ? data.course.map(course => Object({
    id: course.id,
    code: course.code,
    name: course.name,
    description: course.description,
    ratings: course.reviews_aggregate.aggregate.count,
    liked: course.reviews_aggregate.aggregate.avg.liked,
    easy: course.reviews_aggregate.aggregate.avg.course_easy / 5,
    useful: course.reviews_aggregate.aggregate.avg.course_useful / 5,
    sections: course.sections, 
  })) : [];

  const profs = data ? data.prof.map(prof => Object({
    code_name: {
      code: prof.code,
      name: prof.name,
    },
    ratings: prof.reviews_aggregate.aggregate.count,
    liked: prof.reviews_aggregate.aggregate.avg.liked,
    clear: prof.reviews_aggregate.aggregate.avg.prof_clear / 5,
    engaging: prof.reviews_aggregate.aggregate.avg.prof_engaging / 5,
    courses: prof.prof_courses.map(course => course.code)
  })) : [];

  const courseCodeRegex = useCallback(() => {
    let regexStr = '';
    for (let i = filterState.courseCodes.length - 1; i >= 0; i--) {
      if (filterState.courseCodes[i]) {
        regexStr += `|${i < filterState.courseCodes.length - 1 ? i + 1 : '[5-8]'}`;
      }
    }
    regexStr = regexStr === '' ? 'a^' : `(${regexStr.slice(1)})([0-9]{2})`;
    return new RegExp(regexStr);
  }, [filterState]);

  const filteredCourses = courses.filter(course => 
    courseCodeRegex().test(course.code)
      && course.ratings >= ratingFilters[filterState.numCourseRatings]
      && (!filterState.currentTerm || (filterState.currentTerm && course.sections
          && course.sections.some(section => Number(section.term) === currentTermCode)))
      && (!filterState.nextTerm || (filterState.nextTerm && course.sections
          && course.sections.some(section => Number(section.term) === nextTermCode)))
  );

  const filteredProfs = profs.filter(prof =>
    prof.ratings >= ratingFilters[filterState.numProfRatings]
      && (filterState.courseTaught === 0
          || prof.courses.includes(profCourses[filterState.courseTaught]))
  );

  const courseSearch = exploreTab === 0;
  const doneFetching = (courseSearch && data && courses.length >= data.course_aggregate.aggregate.count) ||
    (!courseSearch && data && profs.length >= data.prof_aggregate.aggregate.count);

  const results = () => (
    <SearchResultsContent>
      <Table
        data={courseSearch ? filteredCourses : filteredProfs}
        columns={courseSearch ? courseColumns : profColumns}
        rightAlignIndex={courseSearch ? 2 : 1}
        sortable
        loading={loading}
        doneFetching={doneFetching}
        fetchMore={() => {
          if (loading || (courses.length === 0 && profs.length === 0) || doneFetching) {
            return;
          }

          fetchMore({
            variables: { course_offset: courses.length, prof_offset: profs.length },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              return Object.assign({}, prev, {
                course: [...prev.course, ...fetchMoreResult.course],
                prof: [...prev.prof, ...fetchMoreResult.prof]
              });
            }
          })
        }}
      />
    </SearchResultsContent>
  );

  return (
    <TabContainer
      tabList={[
        {
          onClick: () => setExploreTab(0),
          title: `Courses ${data ? `(${data.course_aggregate.aggregate.count})` : ''}`,
          render: results
        },
        {
          onClick: () => setExploreTab(1),
          title: `Profs ${data ? `(${data.prof_aggregate.aggregate.count})` : ''}`,
          render: results
        },
      ]}
      initialSelectedTab={exploreTab}
      contentPadding="0"
    />
  );
};

SearchResults.propTypes = {
  filterState: PropTypes.object.isRequired,
  results: PropTypes.arrayOf(PropTypes.object),
  ratingFilters: PropTypes.arrayOf(PropTypes.number).isRequired,
  profCourses: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default SearchResults;
