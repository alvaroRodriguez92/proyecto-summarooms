import { Box, Typography } from "@mui/material";


export default function Banner(){
    return(
        <Box sx={{height:"400px",backgroundImage:"linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(../../src/assets/banner.jpg)", backgroundSize:"cover", backgroundPosition:"center bottom", overflow:"hidden", backgroundAttachment:"fixed"}}>
            <Typography sx={{fontStyle:"italic", p:20, px:40,lineHeight:"1.8em",color:"white", letterSpacing:"0.03em"}} variant="h4">"Revenue Management es la técnica de optimizar ingresos para rentabilizar un inventario fijo y extremadamente perecedero"</Typography>
        </Box>

    )
}