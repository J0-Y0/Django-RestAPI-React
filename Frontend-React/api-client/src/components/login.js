import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [credentials, setCredentials] = useState({}) 
  const redirect = useNavigate()
  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post("api/token/", 
        credentials
      );
      // Handle successful response, such as redirecting the user or showing a success message
      console.log("login  successful");
      redirect("/")

    } catch (error) {
      // Handle error, such as displaying an error message to the user
      console.error("Error ;login :", error.message);
    }
  }
  return (
    <Container sx={{ padding: 8, border: 0, width: "40%" }} display="flex">
      <Card variant="outlined">
        <CardContent sx={{ padding: 8, border: "1px solid outline red" }} >
          <form onSubmit={handleSubmit}>
            <Typography noWrap variant='h3'  sx={{ fontSize: 20, fontWeight: "bold", color: "orange" }} color="text.primary" >
              Welcome back
            </Typography>
            <hr />

            <TextField onChange={handleChange} value={credentials['email']}   fullWidth sx={{ marginBottom: 2 }} name = "email" id="email" label="Username or Email" variant="standard" type='email' required  /> <br />
            <TextField onChange={handleChange} value={credentials['password']}   fullWidth sx={{ marginBottom: 2 }} name = "password" id="password" label="Password" variant="standard" required type='password'  /><br /><br />

            <Button type=" submit" fullWidth variant="contained" color='warning'>Login</Button>
          </form>
        </CardContent>
      </Card>

    </Container>
  );
}
