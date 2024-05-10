import gql from 'graphql-tag';

const ProfFragment = {
  profInfo: gql`
    fragment ProfInfo on Professor {
      id
      name
      uwoId
    }
  `,
  profCoursesTaught: gql`
    fragment ProfCoursesTaught on Professor {
      id
      sections {
        courseOffering {
          course {
            faculty {
              abbreviation
              name
            }
          }
        }
      }
    }
  `,
  profRating: gql`
    fragment ProfRating on Professor {
      id
    }
  `,
};

export default ProfFragment;
