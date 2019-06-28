import React from "react";
import styled from "styled-components";
import { ellipsis } from "polished";
import Link from "next/link";
import { A } from "../common/Anchor";

interface ItemCardProps {
  id: string;
  name: string;
  image: { url: string };
  price: number;
}

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  name,
  image,
  price
}: ItemCardProps) => (
  <Container>
    <Link href={`/items/${id}`}>
      <A>
        <Img src={image.url} alt={name} />
        {/* loading="lazy" → missing types */}
      </A>
    </Link>
    <Title>
      <A>{name}</A>
    </Title>
    <Price>¥ {price}</Price>
  </Container>
);

export default ItemCard;

const Container = styled.div`
  padding: 4px;
  border-radius: 4px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
  margin: 10px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h2`
  /* ${ellipsis("auto")} */
  width: auto;
  padding: 12px 12px 0;
  margin: 4px 4px 0;
  border-top: 1.5px solid #eee;
  font-size: 12px;
`;

const Price = styled.span`
  font-weight: bold;
  padding: 12px;
  margin: 4px 4px;
  font-size: 12px;
`;

export const ItemCardLoading: React.FC<{}> = () => <Container></Container>;
