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


   



export default function Signup() {
    return (
        <Container color="primary" sx={{ padding: 8, width: "40%" }} display="flex" alignItems="center" justifyContent="center">

             <CardContent sx={{ padding: 8,border:'1px solid orange' }} >
                <form>
                    <Typography noWrap variant='h3' bold sx={{ fontSize: 20, fontWeight: "bold", color: "orange" }} color="text.primary" >
                        Welcome | Signing-up
                    </Typography>
                    <hr />

                    <TextField fullWidth sx={{ marginBottom: 2 }} id="standard-basic" label="First name" variant="standard" type='text' required gutterBottom /> <br />
                    <TextField fullWidth sx={{ marginBottom: 2 }} id="standard-basic" label="Last name" variant="standard" type='text' required gutterBottom /> <br />

                    <TextField fullWidth sx={{ marginBottom: 2 }} id="standard-basic" label="Username or Email" variant="standard" type='email' required gutterBottom /> <br />
                    <TextField fullWidth sx={{ marginBottom: 2 }} id="standard-basic" label="Password" variant="standard" required type='password' gutterBottom /><br /><br />

                    <Button type=" submit" fullWidth variant="contained" color='warning'>Next</Button>
                </form>
            </CardContent>

        </Container>
    );
}
