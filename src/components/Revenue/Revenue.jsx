import { Grid, Typography } from "@mui/material";


export default function Revenue(){
    return(
        
        <Grid id="revenue" container sx={{ p: 8, display: "flex", flexDirection: "column" }}>
            <Grid item xs={12}>
            <Grid container sx={{ display: "flex", flexDirection: "column" }}>
          <Grid item sx={{ m: "0 auto" }}>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "300" }}
              variant="body"
              color={"primary"}
            >
              ¿Que
            </Typography>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "600" }}
              variant="body"
              color={"primary"}
            >
              {" "}
              hacemos...?
            </Typography>
          </Grid>
          <Grid item sx={{ m: "0 auto", p: 4 }}>
            <Typography
              sx={{ letterSpacing:"0.01em",fontSize: "20px", fontWeight: "300", lineHeight:"1.8em" }}
              variant="body"
            >
              Para obtener los máximos beneficios hay que dedicarle tiempo a una estrategia de ingresos, de manera que una buena optimización de esta puede aumentar tus ingresos preliminares en un 20-30% de manera relativamente sencilla.
            </Typography>
          </Grid>
        </Grid>
        </Grid>
        <Grid item xs={12} sx={{mt:5}}>
            <Grid container>
                <Grid item xs={12} lg={12} xl={8}>
            <img className="img-responsive" src="../grafica-revenue.png"/>
            </Grid>
            <Grid item lg={12} xl={4} sx={{pb:20}}>
            <img className="img2-responsive" src="../foto-revenue.jpg"/>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
    )
}