import React from "react";
import styled from "styled-components";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.SFC<DefaultLayoutProps> = (
  props: DefaultLayoutProps
) => {
  return (
    <Container>
      <Header>karszawa store</Header>
      <Content>{props.children}</Content>
      <Footer>(c) karszawa, inc.</Footer>
    </Container>
  );
};

const Header = styled.header`
  font-size: 24px;
`;

const Footer = styled.footer`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
`;

const Container = styled.div`
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

export default DefaultLayout;
