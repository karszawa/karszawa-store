import React from "react";
import Link from "next/link";
import DefaultLayout from "~/components/layouts/default";
import Head from "next/head";
import { SERVICE_NAME } from "~/constants/domain";
import styled from "styled-components";
import { NextPage } from "next";

const Index: NextPage<{}> = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>{SERVICE_NAME}</title>
        <meta name="Description" content="sitemap"></meta>
      </Head>
      <h1>karszawa-store</h1>
      <LinkContainer>
        <Link href="/items">
          <a>/items</a>
        </Link>
        <Link href="/mine">
          <a>/mine</a>
        </Link>
      </LinkContainer>
    </DefaultLayout>
  );
};

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Index;
