import { Grid, Typography } from "@mui/material";

export default function Nosotros() {
  return (
    <Grid id="nosotros" container sx={{ p: 8, display: "flex", flexDirection: "row" }}>
      <Grid item md={12} lg={12} xl={4}>
        <Grid container sx={{ display: "flex", flexDirection: "column" }}>
          <Grid item sx={{ m: "0 auto" }}>
            <img src="../logo-summarooms.png" />
          </Grid>
          <Grid item sx={{ m: "0 auto" }}>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "300" }}
              variant="body"
              color={"primary"}
            >
              Sobre
            </Typography>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "600" }}
              variant="body"
              color={"primary"}
            >
              {" "}
              nosotros...
            </Typography>
          </Grid>
          <Grid item sx={{ m: "0 auto", p: 4 }}>
            <Typography
              sx={{ letterSpacing:"0.01em",fontSize: "20px", fontWeight: "300", lineHeight:"1.8em" }}
              variant="body"
            >
              Somos una empresa compuesta por un equipo experimentado en el más
              alto nivel de Revenue Management, dedicada a la gestión de
              ingresos como pieza clave para la optimización de beneficios
              usando herramientas, análisis y estrategias propias de Revenue
              Management.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12} xl={8}>
        <Grid container>
          <Grid item xs={4} sx={{p:1}}>
            <img className="img3-responsive" src="../foto1.bmp" />
          </Grid>
          <Grid xs={4} item sx={{p:1}}>
            <img className="img3-responsive" src="../foto2.bmp" />
          </Grid>
          <Grid xs={4} item sx={{p:1}}>
            <img className="img3-responsive" src="../foto3.bmp" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
