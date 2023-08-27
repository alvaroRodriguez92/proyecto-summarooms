import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cabecera() {
  return (
    <Box
      sx={{
        height: "800px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../../src/assets/iniciosummarooms.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        sx={{ ml: "10%", mt: "10%", display: "flex", flexDirection: "column" }}
      >
        <Grid item>
          <Typography
            variant="h3"
            sx={{ letterSpacing: "0.15em", color: "white" }}
          >
            BIENVENIDO A SUMMAROOMS
          </Typography>
        </Grid>
        {/* <Grid item>
        <Typography variant="h3" sx={{letterSpacing:"0.15em", color:"white"}}>SUMMAROOMS</Typography>
        </Grid> */}
        <Grid item xs={6} md={10} xl={12}>
          <Typography
            variant="body1"
            sx={{ fontSize: "24px", color: "white", my: "2%" }}
          >
            Te ayudamos a maximizar la rentabilidad de tu negocio a través del
            Revenue Management a corto, medio y largo plazo.
          </Typography>
        </Grid>
        <Grid item>
          <Link to={"/contacto"}>
            <Button
              sx={{
                color: "white",
                border: "1px solid white",
                backgroundColor: "rgba(0,0,0,0.5)",
                p: 3,
                mt: "3%",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent",
                  borderColor: "white",
                },
              }}
              variant="outlined"
            >
              Más información
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
