import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "~/slices/counter";
import { RootState } from "~/slices/store";
import styled from "styled-components";

const Mining: React.SFC<{}> = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  const onClickButton = useCallback(
    () => dispatch(increment({ amount: 10 })),
    []
  );

  return (
    <Container>
      <GuideText>
        <strong>Your gold amount is {counter}. </strong>Let&rsquo;s click this
        button to get more gold!
      </GuideText>
      <Button onClick={onClickButton}>Mine</Button>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const GuideText = styled.span`
  font-size: 12px;
  margin-bottom: 8px;
`;

const Button = styled.button``;

export default Mining;
