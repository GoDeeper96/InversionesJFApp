import React,{useState} from 'react';
import { Nav, Table, Row, Col, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import Container from "react-bootstrap/Container";
import { makeStyles } from '@mui/styles'
import NavBar from '../src/Components/Navbar/NavBar'
import SideBar from '../src/Components/SideBar/SideBar'
// import { makeStyles } from "@material-ui/core/styles";
import styles from './root.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Facturas from './Pages/Facturas/Facturas'
import Contacto from './Pages/Contacto/Contacto'
import Informacion from './Pages/Informacion/Informacion'
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
const useStyles = makeStyles({

  col:{
    padding:0,
    margin:0,
      
  },
  container: {
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

});


const StyledToolbar = styled(Container)(({ theme }) => ({
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding:'0',
  overflow: 'auto',
  width: window.innerWidth,
  heigth:'100vh',
  // Override media queries injected by theme.mixins.toolbar
  '@media(min-width:1400px)': {
    maxWidth:'100%'
  },
}));
function App() {
  
  const classes = useStyles();
  // const [side,setSide]=useState('');
  
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open)
  };

  const justdoit = (open)=>{
      setState(open);
  }
  return (
    <>
      <Router>
      <NavBar justdoit={justdoit}/>
      <Row className={styles.row}>
        <SideBar  toggleDrawer={toggleDrawer} hey={state}/>
        <Col className={classes.col}>
        <StyledToolbar disableGutters maxWidth={false}>
              <Routes>
              <Route path='/' element={<Home/>}/> 
              <Route path='/productos'  element={<Products/>}/> 
              <Route path='/facturas'  element={<Facturas/>}/>   
              <Route path='/contacto'  element={<Contacto/>}/> 
              <Route path='/informacion'  element={<Informacion/>}/>  
              </Routes>          
          </StyledToolbar>
        </Col>
      </Row>
    </Router>
    </>
  );
}

export default App;
{/* <Container  className={classes.container} maxWidth={false}  disableGutters></Container> */}