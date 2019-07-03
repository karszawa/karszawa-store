import React from "react";
import DefaultLayout from "~/components/layouts/default";
import { SERVICE_NAME } from "~/constants/domain";
import Head from "next/head";
import styled from "styled-components";
import Mining from "~/components/common/Mining";

const Mine: React.FC<{}> = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>mine | {SERVICE_NAME}</title>
        <meta name="Description" content={`${SERVICE_NAME} | Mining...`}></meta>
      </Head>
      <H1>Mine</H1>
      <Content>
        <Mining />
      </Content>
    </DefaultLayout>
  );
};

export default Mine;

const H1 = styled.h1`
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
