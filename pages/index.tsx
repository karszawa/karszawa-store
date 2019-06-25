import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "~/components/layouts/default";
import { increment } from "~/slices/counter";
import { RootState } from "~/slices/store";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";

const GET_DOGS = gql`
  {
    user {
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
  const { data, error, loading } = useQuery(GET_DOGS);

  if (loading) {
    return <span>loading</span>;
  }

  if (error) {
    return <span>error</span>;
  }

  return (
    <DefaultLayout>
      <p>Welcome {data.user.name}!</p>
      <button onClick={onClickButton}>Click {counter}</button>
    </DefaultLayout>
  );
};

export default Page;
