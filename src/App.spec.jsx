import React from "react";
import { qase } from "jest-qase-reporter/jest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component (Unit Tests)", () => {
  
  test(
    qase(1, "should render all input fields and button"),
    () => {
      render(<App />);

      expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /process/i })).toBeInTheDocument();
      expect(screen.queryByText(/Please fill all fields!/i)).not.toBeInTheDocument();
    }
  );

  test(
    qase(2, "should update first name input"),
    () => {
      render(<App />);
      const input = screen.getByLabelText(/First Name/i);

      fireEvent.change(input, { target: { value: "John" } });

      expect(input.value).toBe("John");
    }
  );

  test(
    qase(3, "should update last name input"),
    () => {
      render(<App />);
      const input = screen.getByLabelText(/Last Name/i);

      fireEvent.change(input, { target: { value: "Doe" } });

      expect(input.value).toBe("Doe");
    }
  );

  test(
    qase(4, "should update age input"),
    () => {
      render(<App />);
      const input = screen.getByLabelText(/Age/i);

      fireEvent.change(input, { target: { value: "25" } });

      expect(input.value).toBe("25");
    }
  );

  test(
    qase(5, "should show error when fields are empty"),
    () => {
      render(<App />);

      fireEvent.click(screen.getByRole("button", { name: /process/i }));

      expect(screen.getByText("Please fill all fields!")).toBeInTheDocument();
    }
  );

  test(
    qase(6, "should show error when first name is missing"),
    () => {
      render(<App />);

      fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
      fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: "30" } });

      fireEvent.click(screen.getByRole("button", { name: /process/i }));

      expect(screen.getByText("Please fill all fields!")).toBeInTheDocument();
    }
  );

  test(
    qase(7, "should show error when last name is missing"),
    () => {
      render(<App />);

      fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "John" } });
      fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: "30" } });

      fireEvent.click(screen.getByRole("button", { name: /process/i }));

      expect(screen.getByText("Please fill all fields!")).toBeInTheDocument();
    }
  );

  test(
    qase(8, "should show error when age is missing"),
    () => {
      render(<App />);

      fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "John" } });
      fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });

      fireEvent.click(screen.getByRole("button", { name: /process/i }));

      expect(screen.getByText("Please fill all fields!")).toBeInTheDocument();
    }
  );

  test(
    qase(9, "should display correct message when all fields are filled"),
    () => {
      render(<App />);

      fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "John" } });
      fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
      fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: "25" } });

      fireEvent.click(screen.getByRole("button", { name: /process/i }));

      expect(screen.getByText("The Age of John Doe is 25")).toBeInTheDocument();
    }
  );

  test(
    qase(10, "should show message container only when message exists"),
    () => {
      render(<App />);

      // Initially no message
      expect(screen.queryByText(/The Age/i)).not.toBeInTheDocument();

      // Trigger message
      fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "Jane" } });
      fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
      fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: "28" } });
      fireEvent.click(screen.getByRole("button", { name: /process/i }));

      expect(screen.getByText("The Age of Jane Doe is 28")).toBeInTheDocument();
    }
  );

});
