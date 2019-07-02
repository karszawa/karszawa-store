import React from "react";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";
import ItemDetail from "./ItemDetail";

test("Render ItemDetail", () => {
  const { asFragment } = render(
    <ItemDetail
      id="123"
      name="card"
      description="awesome product"
      file={{ secret: "foo" }}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
