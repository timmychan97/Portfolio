import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

test('Header matches snapshot', () => {
  const { container } = render(<BrowserRouter><Header /></BrowserRouter>);
  expect(container.firstChild).toMatchSnapshot();
});