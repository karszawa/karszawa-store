import React from "react";
import { getImageUrl } from "~/lib/graphcool";
import styled from "styled-components";
import { A } from "../Anchor";
import Link from "next/link";
import { fakeText, LoadingSpan } from "~/styles/loading";

interface ItemDetailProps {
  id: string;
  name: string;
  description: string;
  file: { secret: string };
}

const ItemDetail: React.FC<ItemDetailProps> = ({
  id,
  name,
  description,
  file
}: ItemDetailProps) => {
  const imageUrl = getImageUrl({
    secret: file.secret,
    filename: name,
    size: "500x500"
  });

  return (
    <Container>
      <H1>{name}</H1>
      <Img src={imageUrl} alt={name} />
      <Link href={`/transactions/buy?itemId=${id}`}>
        <BuyA>Buy!</BuyA>
      </Link>
      <Description>{description}</Description>
    </Container>
  );
};

export default ItemDetail;

const Container = styled.article`
  align-self: center;
  max-width: 500px;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  border: 2px solid #eee;
  border-radius: 8px;
`;

const BuyA = styled(A)`
  justify-content: center;
  font-size: 32px;
  border: 1px solid #333;
  border-radius: 4px;
  margin-top: 16px;

  &:hover {
    color: white;
    background-color: #333;
    font-weight: bold;
    opacity: 1;
  }
`;

const Description = styled.p``;

export const ItemDetailLoading: React.FC<{}> = () => (
  <ContainerLoading>
    <H1>
      <LoadingSpan>Loading title ...</LoadingSpan>
    </H1>
    <ImgLoading />
    <Description>
      <LoadingSpan>{fakeText}</LoadingSpan>
    </Description>
  </ContainerLoading>
);

const ContainerLoading = styled.div`
  width: 100%;
  max-width: 400px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgLoading = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  background-color: #eee;
  margin-bottom: 32px;
`;
