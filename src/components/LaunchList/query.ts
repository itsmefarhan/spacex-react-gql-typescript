import gql from "graphql-tag";

export const QUERY_LAUNCH_LIST = gql`
  query LaunchList {
    launches {
      id
      launch_year
      mission_name
      links {
        mission_patch
      }
    }
  }
`;
