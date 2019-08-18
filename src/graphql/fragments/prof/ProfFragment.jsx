import gql from 'graphql-tag';

const ProfFragment = {
  profInfo: gql`
    fragment ProfInfoFragment on prof {
      name
      id
      prof_reviews_aggregate {
        aggregate {
          count(columns: text)
        }
      }
      course_reviews_aggregate {
        aggregate {
          avg {
            liked
          }
          count(columns: liked)
        }
      }
    }
  `,
  profReviewAggregate: gql`
    fragment ProfReviewAggregateFragment on prof_review_aggregate {
      aggregate {
        avg {
          clear
          engaging
        }
      }
    }
  `,
  shallowProfInfo: gql`
    fragment ShallowProfInfoFragment on prof {
      id
      name
    }
  `,
};

export default ProfFragment;