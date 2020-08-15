import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("debug App component", () => {
  const { debug } = render(<App />);
  debug();
});
