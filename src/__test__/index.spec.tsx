import { render, screen } from "@testing-library/react";
import * as React from "react";
import TSReactGist from "../index";

describe("App tests", () => {
  const gistID = "bpod/b2934a994cc51d7136793ee5e6b3f8a0";
  const gistFilename = "checkbox.scss";

  it("should render the gist by ID", () => {
    render(<TSReactGist url="bpod/b2934a994cc51d7136793ee5e6b3f8a0" />);
    const iframe = screen.getByTestId(`gist-${gistID}`);
    expect(iframe).toBeInTheDocument();
  });

  it("should render the gist by ID and FILENAME", () => {
    render(
      <TSReactGist
        url="bpod/b2934a994cc51d7136793ee5e6b3f8a0"
        filename={gistFilename}
      />
    );
    const iframe = screen.getByTestId(`gist-${gistID}-${gistFilename}`);
    expect(iframe).toBeInTheDocument();
  });
});
