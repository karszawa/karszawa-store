import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "~/components/layouts/default";
import { increment } from "~/slices/counter";
import { RootState } from "~/slices/store";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import ItemCard from "~/components/items/ItemCard";

const GET_ITEMS = gql`
  {
    allItems {
      id
      name
    }
  }
`;

const Page: React.SFC<{}> = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  const onClickButton = useCallback(
    () => dispatch(increment({ amount: 10 })),
    []
  );
  const { data, error, loading } = useQuery(GET_ITEMS);

  if (loading) {
    return <span>loading</span>;
  }

  if (error) {
    return <span>error</span>;
  }

  const itemCards = data.allItems.map(item => (
    <ItemCard key={item.id} name={item.name} />
  ));

  return (
    <DefaultLayout>
      <h1></h1>
      <div>{itemCards}</div>
      <button onClick={onClickButton}>Click {counter}</button>
    </DefaultLayout>
  );
};

export default Page;
