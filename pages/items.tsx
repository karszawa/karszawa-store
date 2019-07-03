import React from "react";
import { useQuery } from "react-apollo";
import DefaultLayout from "~/components/layouts/default";
import ItemShowcase from "~/components/common/items/ItemShowcase";
import { GetItemsData, GET_ITEMS } from "~/queries/items";
import styled from "styled-components";
import Head from "next/head";
import { SERVICE_NAME } from "~/constants/domain";

const Items: React.FC<{}> = () => {
  const { data, error, loading } = useQuery<GetItemsData>(GET_ITEMS);

  if (error) {
    return <span>error</span>;
  }

  return (
    <DefaultLayout>
      <Head>
        <title>items | {SERVICE_NAME}</title>
      </Head>
      <H1>items</H1>
      <ItemShowcase items={(data && data.allItems) || []} loading={loading} />
    </DefaultLayout>
  );
};

const H1 = styled.h1`
  text-align: center;
`;

export default Items;
