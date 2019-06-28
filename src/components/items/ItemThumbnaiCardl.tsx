import React from "react";
import styled from "styled-components";

interface ItemThumbnailCardProps {
  name: string;
  price: number;
  image: { url: string };
}

const ItemThumbnailCard: React.FC<ItemThumbnailCardProps> = ({
  name,
  price,
  image
}: ItemThumbnailCardProps) => (
  <Container>
    <Img src={image.url} />
    <Name>{name}</Name>
    <Price>¥ {price}</Price>
  </Container>
);

export default ItemThumbnailCard;

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  align-self: center;
  display: grid;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 10px;
  width: 80%;
  max-width: 400px;
  grid-template:
    "img title"
    "img price" / auto 1fr;
  grid-column-gap: 10px;
`;

const Img = styled.img`
  grid-area: img;
  width: 64px;
  height: 64px;
  border-radius: 4px;
`;

const Price = styled.span`
  grid-area: price;
  align-self: center;
`;

const Name = styled.span`
  grid-area: title;
  align-self: center;
  font-weight: bold;
`;
