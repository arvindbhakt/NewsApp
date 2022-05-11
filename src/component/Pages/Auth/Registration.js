import React from 'react';
import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Registration = () => {
    const navigate=useNavigate();
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name : data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            password_confirmation : data.get('password_confirmation'),
            tc:data.get('tc')
          
        }
        console.log(actualData);
        if (actualData.name && actualData.email && actualData.password && actualData.tc !==null ) {
            if(actualData.password === actualData.password_confirmation){
                console.log(actualData);
                document.getElementById('registration-form').reset()
                setError({ status: true, msg: "Registration SuccessFul", type: "success" })
               setTimeout(()=>{
                navigate('/Dashboard');
               },2000)
            }else{
                setError({ status: true, msg: "Password Not Match", type: "error" }) 
            }

        } else {
            setError({ status: true, msg: "All Fields are Required", type: "error" })
        }
    }

    return (
        <div>
            <Box component='form' noValidate sx={{ mt: 1 }} id="registration-form" onSubmit={handleSubmit} >
            <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
            <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
            <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' />
            <FormControlLabel control={<Checkbox value='agree' color="secondary" name='tc' id='tc' />} label='I Agree to Terms & Conditions' ></FormControlLabel>
                
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{
                        mt: 3,
                        px: 5,
                        mb: 2
                    }} >Register</Button>
                </Box>

                {
                    error.status ? <Alert severity={error.type} >{error.msg}</Alert> :
                        " "
                }
            </Box>
        </div>
    );
};

export default Registration;