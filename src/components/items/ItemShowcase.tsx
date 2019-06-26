import React from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";
import { getImageUrl } from "~/lib/graphcool";
import { Item } from "~/queries/items";

interface Props {
  items: Item[];
}

const ItemShowcase: React.FC<Props> = ({ items }: Props) => {
  const itemCards = items.map(item => (
    <ItemCard
      key={item.id}
      name={item.name}
      price={item.price}
      image={{
        url: getImageUrl({
          secret: item.file.secret,
          size: "200x200",
          filename: `${item.name}.webp`
        })
      }}
    />
  ));

  return <ItemContainer>{itemCards}</ItemContainer>;
};

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  align-content: flex-end;
`;

export default ItemShowcase;
