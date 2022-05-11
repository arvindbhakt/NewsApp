import React from 'react';
import { Box, AppBar,Toolbar,Typography, Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            
            <Box  sx={{flexGrow:10}}>
                <AppBar position="static" color="secondary">   
                  <Toolbar>
                      <Typography sx={{flexGrow:1}} variant="h5" component="div" >
                          Latest News
                      </Typography>
                      <Button sx={{color:'white' ,textTransform: "none"}} component={NavLink} style={({isActive})=>{return{backgroundColor: isActive ? "#6d1b7b" : ""}}} to="/" >Home</Button>
                      <Button sx={{color:"white" ,textTransform: "none"}} component={NavLink} style={({isActive})=>{return{backgroundColor: isActive ? "#6d1b7b" : ""}}} to="/contact" >Contact</Button>
                      <Button sx={{color:"white" ,textTransform: "none"}} component={NavLink} style={({isActive})=>{return{backgroundColor: isActive ? "#6d1b7b" : ""}}} to="/login" >Login/Register</Button>
                  </Toolbar>  
                </AppBar>
            </Box>
            
        </>
    );
};

export default Navbar;