import React from "react";
import styled from "styled-components";
import { SERVICE_NAME } from "~/constants/domain";
import { A, ResetA } from "~/components/common/Anchor";
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
        <Link href="/" passHref>
          <StyledA>{SERVICE_NAME}</StyledA>
        </Link>
      </Header>
      <Content>{props.children}</Content>
      <Footer>
        <ResetA
          href="https://github.com/karszawa"
          target="_blank"
          rel="noopener"
        >
          (c) karszawa, inc.
        </ResetA>
      </Footer>
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

const StyledA = styled(A)`
  color: white;
  justify-content: center;
`;

const Footer = styled.footer`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  padding: 16px 0;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  padding: 0 8px;
`;

export default DefaultLayout;
