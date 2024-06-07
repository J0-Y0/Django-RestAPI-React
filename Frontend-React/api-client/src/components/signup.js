import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';

import { useState } from 'react';
import axiosInstance from '../axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [account, setAccount] = useState({});
    const redirect = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axiosInstance.post("signup", account);
            // Handle successful response, such as redirecting the user or showing a success message
            console.log("Signup successful");
            redirect('/login', { state: { header: "=========ddd" } })
        } catch (error) {
            // Handle error, such as displaying an error message to the user
            console.error("Error signing up:", error.message);
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setAccount({...account, [e.target.name]: e.target.value });
    }


    return (
        <Container color="primary" sx={{ padding: 8, width: "40%" }} display="flex">

             <CardContent sx={{ padding: 8,border:'1px solid orange' }} >
                <form onSubmit={handleSubmit}>
                    <Typography noWrap variant='h3'  sx={{ fontSize: 20, fontWeight: "bold", color: "orange" }} color="text.primary" >
                        Welcome | Signing-up
                    </Typography>
                    <hr />

                    <TextField fullWidth sx={{ marginBottom: 2 }} onChange={handleChange} value={account["first_name"]} name="first_name" id="first_name" label="First name"   variant="standard" type='text' required  /> <br />
                    <TextField fullWidth sx={{ marginBottom: 2 }} onChange={handleChange} value={account["last_name"]}  name="last_name" id="last_name" label="Last name"  variant="standard" type='text' required  /> <br />

                    <TextField fullWidth sx={{ marginBottom: 2 }} onChange={handleChange} value={account['email']}  name="email" id="email" label="Username or Email" variant="standard" type='email' required  /> <br />
                    <TextField fullWidth sx={{ marginBottom: 2 }} onChange={handleChange} value={account['password']}  name="password" id="password" label="Password" variant="standard" required type='password'  /><br /><br />

                    <Button type=" submit" fullWidth variant="contained" color='warning'>Next</Button>
                </form>
            </CardContent>

        </Container>
    );
}
