import React from "react";
import Link from "next/link";
import DefaultLayout from "~/components/layouts/default";

const Index: React.SFC<{}> = () => {
  return (
    <DefaultLayout>
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
