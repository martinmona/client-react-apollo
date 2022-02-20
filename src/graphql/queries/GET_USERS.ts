import gql from 'graphql-tag'

const GET_USERS = gql`
  query getUsers {
    users {
      id
      login
      avatar_url
    }
  }
`
export default GET_USERS
