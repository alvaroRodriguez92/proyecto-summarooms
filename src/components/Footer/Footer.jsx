import { Box, Grid, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#063231",
        px:3,
        py: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} md={6} xl={6} sx={{pb:3,px: 25}}>
        <img src="../../src/assets/Summarooms-blanco (1).png" />
      </Grid>
      <Grid item xs={12} md={6} xl={6} sx={{display: "flex", flexDirection: "column" }}>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <Typography
              sx={{
                letterSpacing: "0.03em",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "1.8em",
                color: "#efefef",
              }}
              variant="body"
            >
              Contacta con nosotros para una propuesta personalizada...
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <MailOutlineIcon sx={{ color: "#efefef", pr: 2 }} />
              <Typography
                variant="body"
                sx={{
                  letterSpacing: "0.01em",
                  fontSize: "16px",
                  fontWeight: "300",
                  lineHeight: "1.8em",
                  color: "#efefef",
                }}
              >
                revenue@summarooms.es
              </Typography>
              <CallOutlinedIcon sx={{ color: "#efefef", ml: 5,pr:1 }} />
              <Typography
                variant="body"
                sx={{
                  letterSpacing: "0.01em",
                  fontSize: "16px",
                  fontWeight: "300",
                  lineHeight: "1.8em",
                  color: "#efefef",
                }}
              >
                +34 679 169 171
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 4 }}>
              <Typography
                sx={{
                  letterSpacing: "0.03em",
                  fontSize: "18px",
                  fontWeight: "300",
                  lineHeight: "1.8em",
                  color: "#efefef",
                }}
                variant="body"
              >
                O a través de nuestro formulario
              </Typography>
              <Typography variant="title" color="inherit" noWrap>
                &nbsp;
              </Typography>
              <Link to={"/contacto"}>
              <Typography
                sx={{
                  letterSpacing: "0.03em",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "1.8em",
                  color: "#efefef",
                  textDecoration: "underline",
                }}
                variant="body"
              >
                aquí
              </Typography>
              </Link>

            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{mt:2}}>
          <Link><LinkedInIcon fontSize="large" sx={{ color: "#efefef", pr: 2 }} /></Link>
          <Link><InstagramIcon fontSize="large"sx={{ color: "#efefef", pr: 2 }} /></Link>
          <Link><TwitterIcon fontSize="large" sx={{ color: "#efefef" }} /></Link>
        </Grid>
        
      </Grid>
    </Grid>
  );
}
