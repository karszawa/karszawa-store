import React from "react";
import styled from "styled-components";

interface ItemCardProps {
  name: string;
}

const ItemCard: React.FunctionComponent<ItemCardProps> = ({
  name
}: ItemCardProps) => (
  <Container>
    <span>Item Name: {name}</span>
  </Container>
);

export default ItemCard;

const Container = styled.div`
  padding: 4px;
  border-radius: 4px;
  width: 80%;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
`;
