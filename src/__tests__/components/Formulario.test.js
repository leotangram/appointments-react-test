import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Formulario from "../../components/Formulario";

test("<Formulario /> Cargar el formulario y revisar que todo sea correcto", () => {
  // const wrapper = render(<Formulario />);
  // wrapper.debug();

  const title = screen.getByTestId("title");

  render(<Formulario />);
  expect(screen.getByText(/crear cita/i)).toBeInTheDocument();
  expect(title.tagName).toBe("H2");
  expect(title.tagName).not.toBe("H1");
  expect(title.textContent).toBe("Crear Cita");
  expect(screen.getByTestId("btn-submit").tagName).toBe("BUTTON");
});
