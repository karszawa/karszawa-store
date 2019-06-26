import gql from "graphql-tag";

export interface Item {
  id: string;
  name: string;
  price: number;
  description: string; // Used in GET_ITEM but not in GET_ITEMS
  file: {
    id: string;
    secret: string;
  };
}

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

export interface GetItemsData {
  allItems: Item[];
}

export const GET_ITEM = gql`
  query GET_ITEM($id: ID!) {
    Item(id: $id) {
      id
      name
      price
      description
      file {
        id
        secret
      }
    }
  }
`;

export interface GetItemData {
  Item: Item;
}
