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

const useStyles = makeStyles({
    ig:{
        margin:5,
       
    }
  });
  

const TextMedia = (props) => {



const classes = useStyles();


    return (
        <div className={classes.ig}>
        
        <Card variant='outlined' sx={{p:2.5}}>
        <Typography variant='h2' sx={{fontWeight:'bold',fontSize:'1.5rem',marginBottom:1}}> 
            {props.h2title}
            
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
            {props.subtitle1}

            </Typography>
        <ImageList cols={props.wh<=540 ? 1:2} >
        
        <Autocomplete
        value={props.value}
        onChange={props.och}
        inputValue={props.inputValue}
        onInputChange={props.onp}
        id="controllable-states-demo"
        options={props.options}
        sx={{m:1,display:'flex',justifyContent:'center',alignItems: 'center'}}
        renderInput={(params) => <TextField {...params} label={props.superiorTitle} />}
        />      
         <CardMedia
            component="img"
           
            image={logojf}
            alt="green iguana"
            
        />
        </ImageList>
        </Card> 
        
        </div>
    )
}

export default TextMedia
