import React from "react";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.SFC<DefaultLayoutProps> = (
  props: DefaultLayoutProps
) => {
  return (
    <div>
      <header>header</header>
      {props.children}
      <footer>footer</footer>
    </div>
  );
};

export default DefaultLayout;
