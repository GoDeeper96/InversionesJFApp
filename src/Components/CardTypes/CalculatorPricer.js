import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ImageList from '@mui/material/ImageList';
import  logojf from '../../Resource/imagenes/logoJF.JPG';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@mui/styles'
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
const useStyles = makeStyles({
    ig:{
        margin:5,
       
    },
    subandtitle:{
        display:'flex',justifyContent:'center',alignItems: 'center'
    }
  });
  

const TextMedia = (props) => {



const classes = useStyles();


    return (
        <div className={classes.ig}>
        
        <Card variant='outlined' sx={{p:2.5}}>
        <div className={classes.subandtitle}>
        <Typography variant='h2' sx={{fontWeight:'bold',fontSize:'1.5rem',marginBottom:1}}> 
            {props.h2title}
            
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
            {props.subtitle1}

            </Typography>
        </div>
        <ImageList cols={props.wh<=540 ? 1:2}>
        <TextField
          label="Cantidad(kg)"
          id="filled-start-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
          variant="filled"
        />
       <Typography variant='h2' sx={{fontWeight:'bold',fontSize:'1rem',marginBottom:1}}> 
            $ {props.unitPrice}           
        </Typography>
     
        <TextField
          label="Cantidad(kg)"
          id="filled-start-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
          variant="filled"
        />
        <Typography variant='h2' sx={{fontWeight:'bold',fontSize:'1rem',marginBottom:1}}> 
            {props.h2title}           
        </Typography>
        </ImageList>
         <CardMedia
            component="img"
           
            image={logojf}
            alt="green iguana"
            
        />
        </Card> 
        
        </div>
    )
}

export default TextMedia
