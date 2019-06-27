import React, { useCallback } from "react";
import { NextContext } from "next";
import Head from "next/head";
import { SERVICE_NAME } from "~/constants/domain";
import DefaultLayout from "~/components/layouts/default";
import styled from "styled-components";
import { GetItemData, GET_ITEM } from "~/queries/items";
import { useQuery } from "react-apollo";
import Link from "next/link";
import { pay } from "~/lib/payment";

interface TransactionBuyProps {
  id: string;
}

const TransactionBuy: React.FC<TransactionBuyProps> = ({
  id
}: TransactionBuyProps) => {
  const { data, error, loading } = useQuery<GetItemData>(GET_ITEM, {
    variables: { id }
  });
  const onClickPayButton = useCallback(() => {
    if (loading || error) {
      // Do nothing while fetching
      return;
    }

    const item = data.Item;

    pay({
      displayItems: [
        {
          label: item.name,
          amount: { currency: "JPY", value: item.price.toString() }
        }
      ],
      total: {
        label: "Total",
        amount: { currency: "JPY", value: item.price.toString() }
      }
    });
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
          Buy {item.name} | {SERVICE_NAME}
        </title>
      </Head>
      <Content>
        <h1>Checkout</h1>
        <Link href={`/items/${item.id}`}>
          <a>Back to the detail</a>
        </Link>
        <p>Please fill the form or ...</p>
        <button onClick={onClickPayButton}>Pay</button>
      </Content>
    </DefaultLayout>
  );
};

(TransactionBuy as any).getInitialProps = (ctx: NextContext) => {
  return {
    id: ctx.query.id
  };
};

const Content = styled.div``;

export default TransactionBuy;
