import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Formulario from "../../components/Formulario";

beforeEach(() => render(<Formulario crearCita={crearCita} />));

const crearCita = jest.fn();

test("<Formulario /> Cargar el formulario y revisar que todo sea correcto", () => {
  // const wrapper = render(<Formulario />);
  // wrapper.debug();
  const title = screen.getByTestId("title");

  expect(screen.getByText(/crear cita/i)).toBeInTheDocument();
  expect(title.tagName).toBe("H2");
  expect(title.tagName).not.toBe("H1");
  expect(title.textContent).toBe("Crear Cita");
  expect(screen.getByTestId("btn-submit").tagName).toBe("BUTTON");
});

test("<Formulario /> Calidación de formulario", () => {
  const btnSubmit = screen.getByTestId("btn-submit");

  userEvent.click(btnSubmit);

  const alert = screen.getByTestId("alert");

  expect(alert).toBeInTheDocument();
  expect(alert.textContent).toBe("Todos los campos son obligatorios");
  expect(alert.tagName).toBe("P");
});

test("should ", () => {
  userEvent.type(screen.getByTestId("pet"), "Hook");
  userEvent.type(screen.getByTestId("propietario"), "Leo");
  userEvent.type(screen.getByTestId("fecha"), "2021-09-10");
  userEvent.type(screen.getByTestId("hora"), "08:35");
  userEvent.type(screen.getByTestId("sintomas"), "Casi no duerme");

  const btnSubmit = screen.getByTestId("btn-submit");
  userEvent.click(btnSubmit);

  const alert = screen.queryByTestId("alert");

  expect(alert).not.toBeInTheDocument();

  expect(crearCita).toHaveBeenCalled();
  expect(crearCita).toHaveBeenCalledTimes(1);
});
