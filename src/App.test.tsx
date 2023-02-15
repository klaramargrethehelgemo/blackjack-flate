import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const overskrift = screen.getByText("BlackJack - Klaras løsning");
  expect(overskrift).toBeInTheDocument();
});
