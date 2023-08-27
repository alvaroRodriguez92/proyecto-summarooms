import { Box, Typography,Grid } from "@mui/material";


export default function Banner(){
    return(
        <Grid container sx={{height:"400px",backgroundImage:"linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(../banner.jpg)", backgroundSize:"cover", backgroundPosition:"center bottom", overflow:"hidden", backgroundAttachment:"fixed"}}>
            <Grid item xs={12} lg={10} sx={{px:2,pt:"6%", m:"0 auto"}}>
            <Typography sx={{fontStyle:"italic" ,lineHeight:"1.8em",color:"white", letterSpacing:"0.03em"}} variant="h4">"Revenue Management es la técnica de optimizar ingresos para rentabilizar un inventario fijo y extremadamente perecedero"</Typography>
            </Grid>
        </Grid>

    )
}