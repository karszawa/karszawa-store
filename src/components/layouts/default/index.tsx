import React from "react";
import styled from "styled-components";
import { SERVICE_NAME } from "~/constants/domain";
import { A } from "~/components/common/Anchor";
import Link from "next/link";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.SFC<DefaultLayoutProps> = (
  props: DefaultLayoutProps
) => {
  return (
    <Container>
      <Header>
        <Link href="/">
          <A>{SERVICE_NAME}</A>
        </Link>
      </Header>
      <Content>{props.children}</Content>
      <Footer>(c) karszawa, inc.</Footer>
    </Container>
  );
};

const Header = styled.header`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  background-color: #333;
  padding: 8px;
  color: white;
`;

const Footer = styled.footer`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  padding: 16px 0;
`;

const Container = styled.div`
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 0 8px;
`;

export default DefaultLayout;
