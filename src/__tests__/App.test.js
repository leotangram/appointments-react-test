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

test("<App /> show test dynamic", () => {
  userEvent.type(screen.getByTestId("pet"), "Hook");
  userEvent.type(screen.getByTestId("propietario"), "Leo");
  userEvent.type(screen.getByTestId("fecha"), "2021-09-10");
  userEvent.type(screen.getByTestId("hora"), "08:35");
  userEvent.type(screen.getByTestId("sintomas"), "Casi no duerme");

  const btnSubmit = screen.getByTestId("btn-submit");
  userEvent.click(btnSubmit);

  const alert = screen.queryByTestId("alert");

  expect(alert).not.toBeInTheDocument();
  expect(screen.getByTestId("dynamic-title").textContent).toBe(
    "Administra tus Citas"
  );
});
