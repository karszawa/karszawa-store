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

const ItemCard: React.FC<ItemCardProps> = (props: ItemCardProps) => {
  const { id, image, name, price } = props;

  return (
    <Container>
      <Link href={`/items/${id}`}>
        <A>
          <Img src={image.url} alt={name} />
          {/* loading="lazy" → missing types */}
        </A>
      </Link>
      <Title>
        <Link href={`/items/${id}`}>
          <A>{name}</A>
        </Link>
      </Title>
      <Price>¥ {price}</Price>
    </Container>
  );
};

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

export const ItemCardLoading: React.FC<{}> = () => (
  <Container>
    <LoadingImg />
    <LoadingTitle>name</LoadingTitle>
    <LoadingPrice>price</LoadingPrice>
  </Container>
);

const loadingProps = {
  color: "transparent",
  backgroundColor: "#eee"
};

const LoadingImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 4px;
  ${loadingProps}
`;

const LoadingTitle = styled.div`
  margin: 8px 4px;
  font-size: 12px;
  ${loadingProps}
`;

const LoadingPrice = styled.div`
  margin: 8px 4px;
  width: 40%;
  font-size: 12px;
  ${loadingProps};
`;
