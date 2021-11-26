import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'

const services = [
    {
        name: "fluoride Treatment",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quos esse nisi aliquam eos placeat. Voluptates reiciendis a nemo magni.',
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quos esse nisi aliquam eos placeat. Voluptates reiciendis a nemo magni.',
        img: cavity
    },
    {
        name: "Teath Whitening",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quos esse nisi aliquam eos placeat. Voluptates reiciendis a nemo magni.',
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: '400', color: 'info.main', m: 1 }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: '600', m: 3 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Service
                                service={service}
                            ></Service>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;