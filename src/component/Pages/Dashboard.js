import React from 'react';
import {Grid,Typography,CssBaseline,Button} from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import ChangePassword from './Auth/ChangePassword';

import 'bootstrap/dist/css/bootstrap.min.css';
const Dashboard = () => {

    const navigate=useNavigate();

    const handleLogout=()=>{
        console.log("Clicked");
        navigate('/login')
    }
    const handleNews=()=>{
        navigate('/news')
    }
    return (
     <>
         <CssBaseline/>
         <Grid container>
         <Grid item sm={5}   sx={{backgroundColor : "gray", p: 5, color : "white"}}>
         <h1>Dashboard</h1>
             <Typography variant='h5' >
                Email : Arvindbhakt24@gmail.com
             </Typography>
             <Typography variant="h6" >Name : Arvind Bhakt</Typography>
             <Button variant='contained' color="warning" size='large' onClick={handleLogout} sx={{mt : 8}} >Log Out</Button>
             </Grid>
             <Grid item sm={7} sx={{display :  'flex', justifyContent : 'center'}} > 
                <ChangePassword />
             </Grid>
             <Grid item sm={12} sx={{display:'flex', justifyContent:'center' ,  my: 5 }} > 
                {/* <NavLink to='/news' className='btn btn-outlined-secondary' >Read News</NavLink> */}
                <Button variant='contained' color='info' size="large" onClick={handleNews} >Read News</Button>
             </Grid>
         </Grid>
     </>
    );
};

export default Dashboard;