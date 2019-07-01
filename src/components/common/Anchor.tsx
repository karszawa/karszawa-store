import styled from "styled-components";

export const A = styled.a`
  display: flex;
  align-items: center;

  &:hover {
    color: #fac75a;
    opacity: 0.7;
    transition: all 0.2s ease-out;
    cursor: pointer;
  }
`;

export const ResetA = styled.a`
  text-decoration: none;
  color: #333;

  &:visited {
    color: #333;
  }
`;
