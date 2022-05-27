import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  #graphql
  mutation createUser($input: UserInput) {
    createUser(input: $input){
      id, username, age
    }
  }
`;
