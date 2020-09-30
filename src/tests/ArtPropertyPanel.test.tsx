import { render } from "@testing-library/react";
import React from "react";
import Art from "../canvasComponents/Art";
import ArtPropertyPanel from "../components/ArtPropertyPanel";

test('Properties matches snapshot', () => {
  const testArt = new Art();
  testArt.id = -100;
  testArt.title = "Test 1";
  testArt.publicProperties["X"] = "200";
  testArt.publicProperties["Y"] = "620";
  testArt.publicProperties["Hello world"] = "world hello";
  testArt.publicProperties["I am a test"] = "7812&T%/fds1  1";

  const { container } = render(<ArtPropertyPanel art={testArt} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('Properties matches snapshot', () => {
  const testArt = new Art();
  testArt.id = 12410;
  testArt.title = "Test 2";
  testArt.publicProperties["Xf2"] = "200";
  testArt.publicProperties["ag23Y"] = "62fs0";
  testArt.publicProperties["Hellogrg world"] = "worl1d hello   ";
  testArt.publicProperties["%&/fd"] = "£$24279yhnuf";

  const { container } = render(<ArtPropertyPanel art={testArt} />);
  expect(container.firstChild).toMatchSnapshot();
});