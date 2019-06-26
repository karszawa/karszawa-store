import React from "react";
import { useQuery } from "react-apollo";
import DefaultLayout from "~/components/layouts/default";
import { GetItemData, GET_ITEM } from "~/queries/items";
import { getImageUrl } from "~/lib/graphcool";
import { NextContext } from "next";
import Head from "next/head";
import { SERVICE_NAME } from "~/constants/domain";
import styled from "styled-components";
import { A } from "~/components/common/Anchor";
import Link from "next/link";

interface ItemsIdProps {
  id: string;
}

const ItemsId: React.FC<ItemsIdProps> = ({ id }: ItemsIdProps) => {
  const { data, error, loading } = useQuery<GetItemData>(GET_ITEM, {
    variables: { id }
  });

  if (loading) {
    return <span>loading</span>;
  }

  if (error) {
    return <span>error</span>;
  }

  const item = data.Item;

  if (!item) {
    return <span>(404)</span>;
  }

  console.log(data);

  const imageUrl = getImageUrl({
    secret: item.file.secret,
    filename: item.name,
    size: "500x500"
  });

  return (
    <DefaultLayout>
      <Head>
        <title>
          {item.name} - {SERVICE_NAME}
        </title>
      </Head>
      <Content>
        <H1>{item.name}</H1>
        <Navigation>
          <Link href="/items" as="/items">
            <A>&lt; Back to the list</A>
          </Link>
        </Navigation>
        <Img src={imageUrl} alt={item.name} />
        <Description>{item.description}</Description>
      </Content>
    </DefaultLayout>
  );
};

(ItemsId as any).getInitialProps = (ctx: NextContext) => {
  return {
    id: ctx.query.id
  };
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Navigation = styled.p``;

const Img = styled.img`
  border: 2px solid #eee;
  border-radius: 8px;
`;

const Description = styled.p`
  max-width: 600px;
`;

export default ItemsId;
