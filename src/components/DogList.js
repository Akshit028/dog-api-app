import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Paper } from '@mui/material';

const DogList = ({ breeds }) => {
    return (
        <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
            <Grid container spacing={3}>
                {breeds.map(breed => {
                    const imageUrl = breed.reference_image_id
                        ? `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`
                        : null;

                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={breed.id}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                {imageUrl ? (
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={imageUrl}
                                        alt={breed.name}
                                        sx={{ objectFit: 'inherit' }}
                                    />
                                ) : (
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            height: '200px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#f0f0f0',
                                            color: '#000'
                                        }}
                                    >
                                        No Image
                                    </CardMedia>
                                )}
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom style={{ color: '#000' }}>
                                        {breed.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Paper>
    );
};

export default DogList;
