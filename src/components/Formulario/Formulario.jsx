import { useState, useRef } from "react";
import { Formik } from "formik";
import { initialValues } from "./utils/initialValues";
import { schema } from "./utils/schema";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import emailjs from '@emailjs/browser';



export default function Formulario() {

  const [mensaje, setMensaje] = useState(false)
  const form = useRef();


  async function onSubmit(values, actions) {
    console.log(values);
     emailjs.sendForm("service_ik7lywk","template_8av6crg", form.current, "baNGMpAYFIJU3NqfQ").then((res)=>{
      console.log(res)
      actions.resetForm();
      console.log(res);
      setMensaje(true)

    });
  }

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      
    >
      {(formik) => (
        <form ref={form} onSubmit={formik.handleSubmit}>
        <Grid container sx={{display:"flex", flexDirection:"column", mt:5, mb:10}}>
            <Grid sx={{ml:"15%"}} item lg={12}>
                <Typography
              sx={{ fontSize: "40px", fontWeight: "300" }}
              variant="h6"
              color={"primary"}
            >Optimiza tu estrategia</Typography>
                <Typography
              sx={{ letterSpacing:"0.01em",fontSize: "20px", fontWeight: "300", lineHeight:"1.8em" }}
              variant="body"
            >Contáctanos sin ningún tipo de compromiso y descubre tu potencial!</Typography>
            </Grid>
            <Grid item lg={12}>
        
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 2,
              width: "70%",
              pt:8,
              pb:1,
              margin: "0 auto",
              alignItems:"center"
            }}
          >
            <Grid container spacing={1} width="100%" sx={{ width: "100%" }}>
              <Grid item xs={10} lg={6}>
                <TextField
                  id="nombre"
                  required
                  error={formik.errors.nombre && formik.touched.nombre}
                  name="nombre"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nombre}
                  helperText={formik.errors.nombre}
                  label="Nombre"
                  size="small"
                  sx={{ m: 1, width: "80%" }}
                  variant="outlined"
                />
              </Grid>
              <Grid xs={10} item lg={6}>
                <TextField
                  required
                  id="apellidos"
                  error={formik.errors.apellidos && formik.touched.apellidos}
                  name="apellidos"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.apellidos}
                  helperText={formik.errors.apellidos}
                  label="Apellidos"
                  size="small"
                  sx={{ m: 1, width: "80%" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} width="100%" sx={{ width: "100%" }}>
              <Grid item xs={10} lg={6}>
                <TextField
                  id="telefono"
                  error={formik.errors.telefono && formik.touched.telefono}
                  type="tel"
                  name="telefono"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.telefono}
                  helperText={formik.errors.telefono}
                  label="Telefono"
                  size="small"
                  sx={{ m: 1, width: "80%" }}
                />
              </Grid>
              <Grid item xs={10} lg={6}>
                <TextField
                  id="email"
                  type="email"
                  error={formik.errors.email && formik.touched.email}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  helperText={formik.errors.email}
                  label="Email"
                  size="small"
                  sx={{ m: 1, width: "80%" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} width="100%" sx={{ width: "100%" }}>
              <Grid item xs={10} lg={6}>
                <TextField
                  id="empresa"
                  type="text"
                  error={formik.errors.empresa && formik.touched.empresa}
                  name="empresa"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.empresa}
                  helperText={formik.errors.empresa}
                  label="Empresa"
                  size="small"
                  sx={{ m: 1, width: "80%" }}
                />
              </Grid>

              <Grid item xs={10} lg={6}>
                <TextField
                  id="comentario"
                  type="text"
                  multiline
                  rows={4}
                  error={formik.errors.comentario && formik.touched.comentario}
                  name="comentario"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comentario}
                  helperText={formik.errors.comentario}
                  label="Comentario"
                  size="small"
                  sx={{ m: 1, width: "80%" }}
                />
              </Grid>
            </Grid>
          </Box>
          {/* <pre>{JSON.stringify(formik.values, null,1)}</pre> */}
        
        </Grid>
        <Grid item lg={12} sx={{p:3, ml:"14%"}}>
        <Button type="submit" variant="contained">Enviar</Button>

        </Grid>
        {mensaje?(<Grid item xs={12} sx={{ml:"12%"}}>
        <Typography
              sx={{ color:"green",letterSpacing:"0.01em",fontSize: "20px", fontWeight: "300", lineHeight:"1.8em" }}
              variant="body"
            >Gracias por su interés en Summarooms. Sus datos han sido enviados correctamente y nos pondremos en contacto con usted lo antes posible.</Typography>
        </Grid>):("")}
        </Grid>
        </form>)}
    </Formik>
  );
}
