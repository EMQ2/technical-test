import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import { PageHeader } from "../PageHeader";

describe("PageHeader", () => {
  it("should render the title and subtitle", () => {
    // Arrange
    let title = "Task List";
    let subTitle =
      "To add a task, just fill the form below and click in add task.";

    // Act
    render(<PageHeader title={title} subTitle={subTitle} />);

    waitFor(() => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Assert
    expect(screen.getByText("Task List")).toBeInTheDocument();
    expect(
      screen.getByText(
        "To add a task, just fill the form below and click in add task.",
      ),
    ).toBeInTheDocument();
  });
});
