import React from "react";
import { render } from "@testing-library/react";
import Box, { BoxProps } from "./Box";
import { v4 as uuid } from "uuid";
import { remove } from "./BoxList";

function renderBox(props: Partial<BoxProps> = {}) {
  const defaultProps: BoxProps = {
    id: uuid(),
    handleRemove: remove,
    width: 5,
    height: 5,
    backgroundColor: "blue",
  };
  return render(<Box {...defaultProps} {...props} />);
}

it("renders without crashing", () => {
  renderBox();
});

it("matches snapshot", () => {
  const { asFragment } = renderBox();
  expect(asFragment()).toMatchSnapshot();
});
