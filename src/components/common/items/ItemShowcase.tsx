import React from "react";
import styled from "styled-components";
import ItemCard, { ItemCardLoading } from "./ItemCard";
import { getImageUrl } from "~/lib/graphcool";
import { Item } from "~/queries/items";

interface Props {
  items: Item[];
  loading: boolean;
}

const ItemShowcase: React.FC<Props> = ({ items, loading }: Props) => {
  if (loading) {
    const itemCards = new Array(30)
      .fill(0)
      .map((_, j) => <ItemCardLoading key={j} />);

    return <ItemContainer>{itemCards}</ItemContainer>;
  }

  const itemCards = items.map(item => (
    <ItemCard
      key={item.id}
      id={item.id}
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
