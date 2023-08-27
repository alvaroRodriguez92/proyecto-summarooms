import * as Yup from "yup";

export const schema = Yup.object().shape({
  nombre: Yup.string()
    .max(50, "Demasiado largo!")
    .required("Requerido"),
  apellidos: Yup.string()
    .required("Requerido"),
  email: Yup.string("Introduzca un email válido")
    .email("Introduzca un email válido")
    .required("Requerido"),
  telefono: Yup.number("Debe ser un número")
    .min(99999, "Too short!")
    .max(999999999999, "Too long!"),
 
    empresa: Yup.string()
    .max(50, "Demasiado largo!"),
    comentario: Yup.string()
    .max(500, "Máximo 500 carácteres")
})