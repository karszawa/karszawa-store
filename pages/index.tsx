import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "~/components/layouts/default";
import { increment } from "~/slices/counter";
import { RootState } from "~/slices/store";

export const Page: React.SFC<{}> = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  const onClickButton = useCallback(
    () => dispatch(increment({ amount: 10 })),
    []
  );

  return (
    <DefaultLayout>
      <p>Props from Redux</p>
      <p>Props from getInitialProps</p>
      <p>welcome to next.js!</p>
      <button onClick={onClickButton}>Click {counter}</button>
    </DefaultLayout>
  );
};

export default Page;
