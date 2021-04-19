import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./components/Menu";

describe("Load button", () => {
  it("loads more users correctly", () => {
    const loadMore = jest.fn();
    const { queryByTestId } = render(<Button loadmore={loadMore} />);
    fireEvent.click(queryByTestId("loadmore-button"));
    expect(loadMore).toHaveBeenCalled();
  });
});
