import React, { useCallback } from "react";
import { NextContext } from "next";
import Head from "next/head";
import { SERVICE_NAME } from "~/constants/domain";
import DefaultLayout from "~/components/layouts/default";
import styled from "styled-components";
import { GetItemData, GET_ITEM } from "~/queries/items";
import { useQuery } from "react-apollo";
import { pay } from "~/lib/payment";
import Router from "next/router";
import ItemThumbnailCard from "~/components/common/items/ItemThumbnaiCardl";
import { getImageUrl } from "~/lib/graphcool";
import BackNavigation from "~/components/common/BackNavigation";

interface TransactionBuyProps {
  id: string;
}

const TransactionBuy: React.FC<TransactionBuyProps> = ({
  id
}: TransactionBuyProps) => {
  const { data, error, loading } = useQuery<GetItemData>(GET_ITEM, {
    variables: { id }
  });
  const onClickPayButton = useCallback(async () => {
    if (loading || error) {
      // Do nothing while fetching
      return;
    }

    const item = data.Item;

    await pay({
      displayItems: [
        {
          label: item.name,
          amount: { currency: "JPY", value: item.price.toString() }
        }
      ],
      total: {
        label: "Total",
        amount: { currency: "JPY", value: item.price.toString() }
      },
      shippingOptions: [
        {
          id: "standard",
          label: "🚛 Ground Shipping (2 days)",
          amount: { currency: "JPY", value: "270" },
          selected: true
        }
      ]
    });
    alert("Payment completed!");
    // Should move to purchase completion page
    // but there are no page which corresponds to it...
    Router.push("/items");
  }, [data, error, loading]);

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

  return (
    <DefaultLayout>
      <Head>
        <title>
          Checkout - {item.name} | {SERVICE_NAME}
        </title>
      </Head>
      <Content>
        <BackNavigation
          href={`/items?id=${item.id}`}
          as={`/items/${id}`}
          text="Back to the list"
        />
        <H1>Checkout</H1>
        <ItemThumbnailCard
          name={item.name}
          price={item.price}
          image={{
            url: getImageUrl({
              secret: item.file.secret,
              filename: item.name,
              size: "500x500"
            })
          }}
        />
        <PayButton onClick={onClickPayButton}>Pay</PayButton>
      </Content>
    </DefaultLayout>
  );
};

(TransactionBuy as any).getInitialProps = (ctx: NextContext) => {
  return {
    id: ctx.query.itemId
  };
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  text-align: center;
`;

const PayButton = styled.button`
  max-width: 400px;
  align-self: center;
  width: 80%;
`;

export default TransactionBuy;
