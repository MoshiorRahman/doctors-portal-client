import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import treatmentImg from '../../../images/treatment.png';


const Exceptional = () => {
    return (
        <Container fixed>
            <Grid container spacing={2} sx={{ py: 5 }}>
                <Grid item sm={12} md={6}>
                    <img style={{ width: '100%' }} src={treatmentImg} />
                </Grid>
                <Grid sx={{ textAlign: 'left' }} item sm={12} md={6}>
                    <Typography sx={{ fontWeight: '500' }} variant="h4" gutterBottom component="div">
                        Exceptional Dental Care, on Your Terms
                    </Typography>
                    <Typography sx={{ py: 5, color: 'text.secondary' }} variant="h6" gutterBottom component="div">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsumis that it hase a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.
                    </Typography>
                    <Button variant="contained">Learn More</Button>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Exceptional;