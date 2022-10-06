
import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'
import CssBaseline from '@mui/material/CssBaseline';
import { Divider } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import styles from './Home.module.css'
import Carousel from '../../Components/Carousel/Carousel'
import Badge from 'react-bootstrap/Badge';
import { Nav, Table, Row, Col, Navbar, NavDropdown} from 'react-bootstrap';
import { styled } from "@mui/material/styles";
const StyledToolbar = styled(Container)(({ theme }) => ({
  
  display:'block',
  justifyContent: 'center',
  alignItems: 'center',
  padding:'0',
  flexDirection:4,
  width: window.innerWidth,
  heigth:'100vh',
  // Override media queries injected by theme.mixins.toolbar
  '@media(min-width:1400px)': {
    maxWidth:'100%'
  },
}));
const Home = () => {
  
    return (
        <Row>
          <StyledToolbar disableGutters maxWidth={false} >
            <div className={styles.margRL}>      
          <Carousel/> 
          </div>
          </StyledToolbar >
          
          <div>
            <h1>
              Example heading <Badge bg="secondary">New</Badge>
            </h1>
            <h2>
              Example heading <Badge bg="secondary">New</Badge>
            </h2>
            <h3>
              Example heading <Badge bg="secondary">New</Badge>
            </h3>
            <h4>
              Example heading <Badge bg="secondary">New</Badge>
            </h4>
            <h5>
              Example heading <Badge bg="secondary">New</Badge>
            </h5>
            <h6>
              Example heading <Badge bg="secondary">New</Badge>
            </h6>
          </div>
          
          
          
        </Row>
        
        
      
    )
}

export default Home

{/* <ImageGallery 
items={images}
showThumbnails={false}
autoPlay={true}
disableSwipe={true}
disableThumbnailSwipe={true}
lazyLoad={true}
/> */}