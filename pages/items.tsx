import React from "react";
import { useQuery } from "react-apollo";
import DefaultLayout from "~/components/layouts/default";
import ItemShowcase from "~/components/items/ItemShowcase";
import { Data, GET_ITEMS } from "~/queries/items";
import Mining from "~/components/common/Mining";
import styled from "styled-components";

const Page: React.SFC<{}> = () => {
  const { data, error, loading } = useQuery<Data>(GET_ITEMS);

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
