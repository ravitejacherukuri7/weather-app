import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ data }) => {
  const { city, list } = data;
  const temperature = list[0].main.temp; 
  const weatherDescription = list[0].weather[0].description; 

  return (
    <Card variant="outlined" style={{ margin: '10px', width: '300px' }}>
      <CardContent>
        <Typography variant="h5">{city.name}</Typography>
        <Typography>Temperature: {temperature} K</Typography>
        <Typography>Description: {weatherDescription}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;