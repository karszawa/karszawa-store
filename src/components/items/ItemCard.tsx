import React from "react";
import styled from "styled-components";
import { ellipsis } from "polished";
import Link from "next/link";

interface ItemCardProps {
  name: string;
  image: { url: string };
  price: number;
}

const ItemCard: React.FC<ItemCardProps> = ({
  name,
  image,
  price
}: ItemCardProps) => (
  <Container>
    <Link href="">
      <InteractiveAnchor>
        <Img width={200} height={200} src={image.url} />
        {/* loading="lazy" → missing types */}
      </InteractiveAnchor>
    </Link>
    <Title>
      <InteractiveAnchor>{name}</InteractiveAnchor>
    </Title>
    <Price>¥ {price}</Price>
  </Container>
);

export default ItemCard;

const Container = styled.div`
  padding: 4px;
  border-radius: 4px;
  width: 40%;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 16px;

  &:nth-child(odd) {
    margin-right: 16px;
  }
`;

const Img = styled.img`
  object-fit: cover;
  border-radius: 4px;
`;

const InteractiveAnchor = styled.a`
  &:hover {
    color: #fac75a;
    opacity: 0.7;
    transition: all 0.2s ease-out;
    cursor: pointer;
  }
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
