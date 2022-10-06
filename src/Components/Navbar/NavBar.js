import React from 'react'
import { Nav, Table, Row, Col, Navbar, NavDropdown } from 'react-bootstrap';
import { makeStyles } from '@mui/styles'
import { styled } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import  logojf from '../../Resource/imagenes/asdf.png';
import { Link } from 'react-router-dom';
// import ListItemText from '@mui/material/ListItemText';
// import ListItem from '@mui/material/ListItem';

// import AccountCircle from "@mui/icons-material/AccountCircle";
// import Switch from "@mui/material/Switch";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormGroup from "@mui/material/FormGroup";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import styles from './NavBar.module.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
const NavLink = styled(Link)`
  color: #172334;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size:19px;
  font-family: 'Montserrat', sans-serif;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;
const useStyles = makeStyles({

  lg:{
    height:50
  }

});
const theme = createTheme({
  components: {
    Toolbar: {
      styleOverrides: {
        backgroundColor: "#ffff00",
        color: "#000000",
        height: "32px !important",
        minHeight: "32px !important",
        '@media(min-width:600px)' : {
          minHeight:"48px !important"
        }
      }
    }
  }
});
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media(min-width:600px)': {
    
  }
}));
const LinkTab = props => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const NavBar = props => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChangeG = (event, newValue) => {
    setValue(newValue);
  }
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //#EEE4E2 #19306D  D6D6D6
  return (

    
      <AppBar  position="static" sx={{backgroundColor:'#E7EFF9',top:0} }>
      <StyledToolbar>
      <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
            fontSize="large"
            onClick={()=>props.justdoit(true)}
          >
            <MenuIcon   />
          </IconButton>
          
      <Container maxWidth={false} >       
        <Toolbar sx={{justifyContent:'center'}} >        
          <img src={logojf} alt="INVERSION JF LOGO" className={classes.lg}/>                  
          </Toolbar>  
          {window.innerWidth>450 ?         
          <Toolbar sx={{justifyContent: 'center'}}>          
            
              <NavLink to="/" className={classes.gogogo} activeStyle> 
                  Inicio  
              </NavLink>  
              <NavLink to="/productos" className={classes.gogogo} activeStyle> 
                  Productos
              </NavLink>  
              <NavLink to="/contacto" className={classes.gogogo} activeStyle> 
                  Contacto
              </NavLink>                     
          </Toolbar> : null }
          {/* {auth && (
            <div>
              <IconButton
                size="large"
                aria-lab  el="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )} */}
        
        </Container>
        </StyledToolbar>
        
      </AppBar>
      
    
  );
}

export default NavBar
{/* <Box sx={{ flexGrow: 1 ,display: 'flex',alignItems: 'center',justifyContent: 'center'}} >
</Box> */}