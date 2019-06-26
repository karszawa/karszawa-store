import gql from "graphql-tag";

export const GET_ITEMS = gql`
  {
    allItems {
      id
      name
      price
      file {
        id
        secret
      }
    }
  }
`;

export interface Item {
  id: string;
  name: string;
  price: number;
  file: {
    id: string;
    secret: string;
  };
}

export interface Data {
  allItems: Item[];
}
