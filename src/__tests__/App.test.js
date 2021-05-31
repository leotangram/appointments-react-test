import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

beforeEach(() => render(<App />));

test("<App /> la aplicación funciona bien por primera vez", () => {
  expect(screen.getByTestId("app-title")).toBeInTheDocument();
  expect(screen.getByTestId("app-title").textContent).toBe(
    "Administrador de Pacientes"
  );
  expect(screen.getByTestId("app-title").tagName).toBe("H1");
  expect(screen.getByText("No hay citas")).toBeInTheDocument();
  expect(screen.getByText(/crear cita/i)).toBeInTheDocument();
});
