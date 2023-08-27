import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


const pages = [{nombre:'¿Quienes somos?', href:"#nosotros"}, {nombre:'Revenue Management', href:"#revenue"}, {nombre:"Proyectos", href:"#"}, {nombre:"Contáctanos", href:"/contacto"}];

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="100%">
        <Toolbar sx={{justifyContent:"space-between"}}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{p:2, pl:5}}>
          <Link to="/"><img width="60%" src="../Summarooms-blanco (1).png"/></Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.nombre} onClick={handleCloseNavMenu}>
                  <a key={page.nombre} href={page.href}><Typography textAlign="center">{page.nombre}</Typography></a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ justifyContent:"flex-end", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <a key={page.nombre} href={page.href}><Button
                key={page.nombre}
                onClick={handleCloseNavMenu}
                sx={{fontWeight:"600",letterSpacing:"0.03em",fontFamily:"'Inter', sans-serif", fontSize:"12px" ,mr:3,my: 2, color: '#d1e0e0', display: 'block' }}
              >
                {page.nombre}
              </Button></a>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


