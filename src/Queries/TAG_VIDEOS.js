import { gql } from 'apollo-boost'

export default gql`
  query tagVideosw($name: String) {
    allTagses(filter: { name: $name }) {
      id
      name
      videos {
        id
        description
        link
        name
        tags {
          name
          id
        }
        speaker {
          name
        }
      }
    }
  }
`
