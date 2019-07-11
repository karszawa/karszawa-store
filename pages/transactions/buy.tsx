import React, { useCallback } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "~/slices/store";
import Link from "next/link";
import { A } from "~/components/common/Anchor";
import { NextPage, NextPageContext } from "next";

interface Params {
  id: string;
}

const TransactionBuy: NextPage<Params> = ({ id }: Params) => {
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
          label: "🐌 Snails Shipping (∞ days)",
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
  const counter = useSelector((state: RootState) => state.counter.value);

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

  const userHasEnoughCoin = item.price <= counter || true;

  return (
    <DefaultLayout>
      <Head>
        <title>
          Checkout - {item.name} | {SERVICE_NAME}
        </title>
        <meta
          name="Description"
          content={`${SERVICE_NAME} | ${item.name} | ${item.description}`}
        ></meta>
      </Head>
      <Content>
        <BackNavigation
          href={`/items/${id}`}
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
        <GuideText>
          {userHasEnoughCoin ? (
            `You have ${counter} KZC. Pay ${item.price} KZC instead of paying JPY?`
          ) : (
            <span>
              You have only {counter} KZC.{" "}
              <Link href="/mine" passHref>
                <LinkText>Go to the mine and do mining.</LinkText>
              </Link>
            </span>
          )}
        </GuideText>
        <PayButton onClick={onClickPayButton} disabled={!userHasEnoughCoin}>
          Pay
        </PayButton>
      </Content>
    </DefaultLayout>
  );
};

TransactionBuy.getInitialProps = async (ctx: NextPageContext) => {
  return {
    id: ctx.query.itemId.toString()
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
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1.5rem;
  border-radius: 4px;
`;

const GuideText = styled.p`
  align-self: center;
`;

const LinkText = styled(A)`
  text-decoration: underline;
`;

export default TransactionBuy;
