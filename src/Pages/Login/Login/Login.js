import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import LoginImg from '../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const { user, isLoading, authError,
        LoginUser, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        LoginUser(loginData.email, loginData.password, location, history);

    }

    const handleGoogleSingIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 20 }} xs={12} md={6}>
                    <Typography style={{ color: 'green' }} variant="h3" gutterBottom>
                        Please Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ my: 1, width: '75%' }}
                            id="standard-basic"
                            label="user email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ my: 1, width: '75%' }}
                            id="standard-basic"
                            label="user password"
                            type='password'
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button sx={{ my: 3, width: '75%' }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button></NavLink>

                        {isLoading && <CircularProgress color="inherit" />
                        }
                        {user?.email && <Alert severity="success">Login Successfully</Alert>
                        }
                        {authError && <Alert severity="error">{authError}</Alert>
                        }
                    </form>
                    <p>-----------------------</p>
                    <Button
                        onClick={handleGoogleSingIn}
                        variant="contained">Google Sign In</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={LoginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;