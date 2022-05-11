import React from 'react';
import { TextField,Box,Button,Alert } from '@mui/material';
import { useState} from 'react';

const ChangePassword = () => {
    const [error,setError] = useState({
        status:false,
        msg:"",
        type:""
    })
    //const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
            
            password: data.get('password'),
            password_confirmation : data.get('password_confirmation')
        }
        // console.log(actualData);
        if(actualData.password && actualData.password_confirmation){
            if(actualData.password === actualData.password_confirmation){
                console.log(actualData);
            document.getElementById('password-change-form').reset()
            setError({status:true, msg: "Password Updated", type:"success"})
            //navigate('/news')
            
            // setTimeout(()=>{
            //     navigate('/dashboard')
            // },3000)

            }else {
                setError({status:true, msg: "Password Not Match", type:"error"})
            }
            
        }else{
                setError({status:true, msg: "All Fields are required", type:"error"})
        }
    }

return (
   <>
       <Box sx={{display : 'flex', flexDirection: 'column', flexWrap : 'wrap', maxWidth : 600, mx: 4}}>
       <Box component='form' noValidate sx={{mt: 1}} id="password-change-form" onSubmit={handleSubmit} >
            
            <TextField margin='normal' required fullWidth id='password' name='password' label=' New Password'   type='password' />
            <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm New Password' type='password' />

            <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{mt:3, px: 5, mb: 2}} >Update</Button>
            </Box>
           
            {
                error.status ? <Alert severity={error.type} >{error.msg}</Alert> :
                " "
            }
       </Box>
       </Box>
   </>
);
};

export default ChangePassword;