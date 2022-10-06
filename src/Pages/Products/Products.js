import React,{useState,useEffect} from 'react'
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import Producto from '../../Model/Productos';
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@mui/styles'
import AoS from 'aos';
import 'aos/dist/aos.css';
const useStyles = makeStyles({

  fc:{
    textAlign: 'center',
  },
  look:{
    marginTop:'60px',
  }

});


const Products = () => {

    const [wh,setwh] = useState(window.innerWidth);
    const classes = useStyles();
    useEffect(() => {
      AoS.init({ duration: 2000 });
    }, [])

    return (
      <div className={classes.look}>
      <ImageList cols={wh<=540 ? 1:2} sx={{overflow:'hidden'}} >
        
      {itemData.map((item,index)=>(
        <Card data-aos="fade-up" sx={{ maxWidth: 500,marginTop:2,marginBottom:5,marginRight:10,marginLeft:10}} >
        <CardActionArea href="https://google.com" >

      <CardMedia
        component="img"
        
        image={item.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {wh}
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      </CardActionArea>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        </CardActions>
      
    </Card>
        
      ))}    
    </ImageList>
    </div>
    )
}
// new Producto(),
// new Producto(),
// new Producto(),
// new Producto(),
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];
export default Products;