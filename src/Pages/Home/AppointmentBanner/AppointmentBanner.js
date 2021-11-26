import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import Container from '@mui/material/Container';

import doctor from '../../../images/doctor.png';
import bgImage from '../../../images/appointment-bg.png';

const appointmentBg = {
    background: `url(${bgImage})`,
    backgroundColor: 'rgba(44, 46, 73,0.8)',
    backgroundBlendMode: 'multiply',
    marginTop: 150
}

const AppointmentBanner = () => {
    return (
        <Container>
            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <img style={{ width: 400, marginTop: '-115px' }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={7} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant="h6" sx={{ color: 'info.main' }}>
                                APPOINTMENT
                            </Typography>
                            <Typography style={{ color: 'white' }} sx={{ my: 3 }} variant="h4">
                                Make an Appointment Today
                            </Typography>
                            <Typography style={{ color: 'white', fontSize: '14' }} sx={{ fontWeight: 'light', my: 3 }} variant="p">
                                It is long established fact that a reader will be distractedby the readable content of a page when looking at its.
                            </Typography>
                            <br />
                            <Button sx={{ my: 5, backgroundColor: '#00FFFF', color: 'white', px: 2 }} >Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentBanner;