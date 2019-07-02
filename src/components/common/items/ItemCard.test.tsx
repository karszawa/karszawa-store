import React from "react";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";
import ItemCard from "./ItemCard";

test("Render ItemCard", () => {
  const { asFragment } = render(
    <ItemCard
      id="123"
      name="card"
      price={1234}
      image={{ url: "http://placekitten.com/200/300" }}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
