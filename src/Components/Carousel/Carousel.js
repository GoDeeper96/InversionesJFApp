import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { makeStyles } from '@mui/styles'
import { styled } from "@mui/material/styles";
const useStyles = makeStyles({

  img__c:{
    width:'100%',
  }

});
const  ControlledCarousel =(props)=> {
    const [index, setIndex] = useState(0);
    const classes = useStyles();
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    
      <Carousel fade  activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img
            className={classes.img__c}
            src='https://picsum.photos/seed/picsum/1500/600'
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className={classes.img__c}
            src="https://picsum.photos/seed/picsum/1500/600"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className={classes.img__c}
            src="https://picsum.photos/seed/picsum/1500/600"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default ControlledCarousel;