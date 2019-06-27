import React from "react";
import Link from "next/link";
import DefaultLayout from "~/components/layouts/default";
import Head from "next/head";
import { SERVICE_NAME } from "~/constants/domain";

const Index: React.SFC<{}> = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>{SERVICE_NAME}</title>
      </Head>
      <h1>karszawa-store</h1>
      <div>
        <Link href="/items">
          <a>/items</a>
        </Link>
      </div>
    </DefaultLayout>
  );
};

export default Index;
