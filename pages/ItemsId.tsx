import React from "react";
import { useQuery } from "react-apollo";
import DefaultLayout from "~/components/layouts/default";
import { GetItemData, GET_ITEM } from "~/queries/items";
import { NextContext } from "next";
import Head from "next/head";
import { SERVICE_NAME } from "~/constants/domain";
import styled from "styled-components";
import { A } from "~/components/common/Anchor";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemDetail, { ItemDetailLoading } from "~/components/items/ItemDetail";

interface ItemsIdProps {
  id: string;
}

const ItemsId: React.FC<ItemsIdProps> = ({ id }: ItemsIdProps) => {
  const { data, error, loading } = useQuery<GetItemData>(GET_ITEM, {
    variables: { id }
  });

  if (error) {
    return <span>error</span>;
  }

  if (!loading && !data.Item) {
    return <span>(404)</span>;
  }

  const item = data && data.Item;

  return (
    <DefaultLayout>
      <Head>
        <title>{item ? `${item.name} | ${SERVICE_NAME}` : SERVICE_NAME}</title>
      </Head>
      <Content>
        <Navigation>
          <Link href="/items" as="/items">
            <A>
              <FontAwesomeIcon icon="chevron-left" />
              &nbsp; Back to the list
            </A>
          </Link>
        </Navigation>
        {loading ? (
          <ItemDetailLoading />
        ) : (
          item && (
            <ItemDetail
              id={item.id}
              name={item.name}
              description={item.description}
              file={item.file}
            />
          )
        )}
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

const Navigation = styled.p``;

export default ItemsId;
