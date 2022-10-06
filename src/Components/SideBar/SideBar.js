import React,{ useState} from 'react';
import {  Col } from 'react-bootstrap';
// import CardContent from "@material-ui/core/CardContent";
// import Card from "@material-ui/core/Card";
// import styles from './Sidebar.module.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from "@mui/material/IconButton";
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from 'react-router-dom';
const Sidebar=props=>{
    //   const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //       return;
    //     }
    
    //     props.setState({ ...props.state, [anchor]: open });
    //   };
      const rts = [
        {
          title:'Home',
          path:'/',
          icon:<InventoryIcon/>
        },
        {
          title:'Products',
          path:'/productos',
          icon:<InventoryIcon/>
        },
        {
          title:'Facturas',
          path:'/facturas',
          icon:<InventoryIcon/>
        },
      
      ]
      const sec = [
        {
          title:'Sobre Nosotros',
          path:'/informacion',
          icon:<InboxIcon/>
        },
        {
          title:'Contacto',
          path:'/contacto',
          icon:<MailIcon/>
        },
      ]
      const list = () => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={props.toggleDrawer(false)}
          onKeyDown={props.toggleDrawer(false)}
        >
          <List>
           {
             rts.map((item,index)=>{
               return (

                <Link to={item.path}>
                <ListItem button key={item.title} >
                 
                <ListItemIcon>
                
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
                
                </ListItem>  
                </Link>
               )
             })
           }
          </List>
          <Divider />
          <List>
           {
             sec.map((item,index)=>{
               return (
                <Link to={item.path}>
                <ListItem button key={item.title} >                
                <ListItemIcon>              
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />                
                </ListItem>  
                </Link>
               )
             })
           }
          </List>
        </Box>
      );
      return (
        <div>
            <React.Fragment key={'left'}>            
              <Drawer
                anchor={'left'}
                open={props.hey}
                onClose={props.toggleDrawer(false)}
              >
                {list()}
              </Drawer>
            </React.Fragment>
        </div>
      );
}
export default Sidebar;