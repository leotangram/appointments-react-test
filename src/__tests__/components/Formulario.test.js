import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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

  fireEvent.click(btnSubmit);

  const alert = screen.getByTestId("alert");

  expect(alert).toBeInTheDocument();
  expect(alert.textContent).toBe("Todos los campos son obligatorios");
  expect(alert.tagName).toBe("P");
});
