import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { useState } from 'react';
import axiosInstance from '../axios'

export default function Signup() {

    const [account, setAccount] = useState({});
    



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axiosInstance.post("/signup", {
                "email": account['email'],
                "password": account['password'],
                "first_name": account['firstName']
                // Include other data you want to send in the request
            });
            // Handle successful response, such as redirecting the user or showing a success message
            console.log("Signup successful");
        
        } catch (error) {
            // Handle error, such as displaying an error message to the user
            console.error("Error signing up:", error.message);
        }
    }

    const handleChange = (e) => {
        const accountCopy = { ...account }
        accountCopy[e.target.name] = e.target.value;
        setAccount(accountCopy)
        // setAccount({...account, [e.target.name]: e.target.value });
    }


    return (
        <Container color="primary" sx={{ padding: 8, width: "40%" }} display="flex" alignItems="center" justifyContent="center">

             <CardContent sx={{ padding: 8,border:'1px solid orange' }} >
                <form onSubmit={handleSubmit}>
                    <Typography noWrap variant='h3' bold sx={{ fontSize: 20, fontWeight: "bold", color: "orange" }} color="text.primary" >
                        Welcome | Signing-up
                    </Typography>
                    <hr />

                    <TextField fullWidth sx={{ marginBottom: 2 }} onChange={handleChange} value={account['firstName']} name="firstName" id="fistName" label="First name"   variant="standard" type='text' required gutterBottom /> <br />
                    <TextField fullWidth sx={{ marginBottom: 2 }} onChange={handleChange} value={account['lastName']}  name="lastName" id="lastName" label="Last name"  variant="standard" type='text' required gutterBottom /> <br />

                    <TextField fullWidth sx={{ marginBottom: 2 }} onChange={handleChange} value={account['email']}  name="email" id="email" label="Username or Email" variant="standard" type='email' required gutterBottom /> <br />
                    <TextField fullWidth sx={{ marginBottom: 2 }} onChange={handleChange} value={account['password']}  name="password" id="password" label="Password" variant="standard" required type='password' gutterBottom /><br /><br />

                    <Button type=" submit" fullWidth variant="contained" color='warning'>Next</Button>
                </form>
            </CardContent>

        </Container>
    );
}
