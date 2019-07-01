import React from "react";
import { A } from "./Anchor";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";

test("Render Anchor", () => {
  const { asFragment } = render(<A href="https://mercari.com/jp">top</A>);

  expect(asFragment()).toMatchSnapshot();
});
