import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axiosInstance from '../axios';








export default function Login() {
  const [credentials, setCredentials] = useState({});




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("api/token", {
        credentials,
        // Include other data you want to send in the request
      });
      const { token, refreshToken } = response.data;


      // Store the tokens in localStorage or secure cookie for later use
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);

      // Handle successful response, such as redirecting the user or showing a success message
      console.log("Signup successful");

    } catch (error) {
      alert("loginfail")

      // Handle error, such as displaying an error message to the user
      console.error("Error signing up:", error.message);
    }
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }






  return (
    <Container sx={{ padding: 8, border: 0, width: "40%" }} display="flex" alignItems="center" justifyContent="center">
      <Card variant="outlined">
        <CardContent sx={{ padding: 8, border: "1px solid outline red" }} >
          <form onSubmit={handleSubmit}>
            <Typography noWrap variant='h3' bold sx={{ fontSize: 20, fontWeight: "bold", color: "orange" }} color="text.primary" >
              Welcome back
            </Typography>
            <hr />

            <TextField value={credentials['email']} onChange={handleChange} name='email' fullWidth sx={{ marginBottom: 2 }} id="email" label="Username or Email" variant="standard" type='email' required gutterBottom /> <br />
            <TextField value={credentials['password']} onChange={handleChange} name='password' fullWidth sx={{ marginBottom: 2 }} id="password" label="Password" variant="standard" required type='password' gutterBottom /><br /><br />

            <Button  type=" submit" fullWidth variant="contained" color='warning'>Login</Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
