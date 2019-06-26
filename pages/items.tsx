import React from "react";
import { useQuery } from "react-apollo";
import DefaultLayout from "~/components/layouts/default";
import ItemShowcase from "~/components/items/ItemShowcase";
import { GetItemsData, GET_ITEMS } from "~/queries/items";
import Mining from "~/components/common/Mining";
import styled from "styled-components";

const Items: React.FC<{}> = () => {
  const { data, error, loading } = useQuery<GetItemsData>(GET_ITEMS);

  if (loading) {
    return <span>loading</span>;
  }

  if (error) {
    return <span>error</span>;
  }

  console.log(data);

  return (
    <DefaultLayout>
      <H1>karszawa items</H1>
      <ItemShowcase items={data.allItems} />
      <Mining />
    </DefaultLayout>
  );
};

const H1 = styled.h1`
  text-align: center;
`;

export default Page;
