import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  #graphql
  query {
    getAllUsers {
      id
      username
      age
    }
  }
`;

export const GET_USER = gql`
  #graphql
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`;
