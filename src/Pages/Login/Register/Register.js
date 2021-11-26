import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import LoginImg from '../../../images/login.png';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState();
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 20 }} xs={12} md={6}>
                    <Typography style={{ color: 'green' }} variant="h3" gutterBottom>
                        Please Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ my: 1, width: '75%' }}
                            id="standard-basic"
                            label="user name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ my: 1, width: '75%' }}
                            id="standard-basic"
                            label="user email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ my: 1, width: '75%' }}
                            id="standard-basic"
                            label="user password"
                            type='password'
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ my: 1, width: '75%' }}
                            id="standard-basic"
                            label="confirm password"
                            type='password'
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button sx={{ my: 3, width: '75%' }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button></NavLink>
                    </form>}
                    {isLoading && <CircularProgress color="inherit" />
                    }
                    {user?.email && <Alert severity="success">Youser Created Successfully</Alert>
                    }
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={LoginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;