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
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker'
const useStyles = makeStyles({
    ig:{
        margin:5,
       
    },
    lp:{
        
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        
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
        
        <LocalizationProvider dateAdapter={AdapterDateFns}> 
        <div className={classes.lp}>          
               <DesktopDatePicker                 
                 label="Date desktop"
                 inputFormat="MM/dd/yyyy"
                 value={props.value}
                 onChange={props.handleChange}
                 renderInput={(params) => <TextField {...params} />}
               />     
        </div> 
        </LocalizationProvider>    
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
