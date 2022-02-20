//import GET_USERS from "../queries/GET_USERS";

import { useQuery } from "@apollo/react-hooks"
import gql from 'graphql-tag'

const GET_ARTICLES = gql`
  query getArticles {
    articles {
      _id
      title
      body
      createdAt
    }
  }
`
const UseGetArticles = () => {
  return useQuery(GET_ARTICLES)
}

export default UseGetArticles
