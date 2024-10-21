import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { Container, CircularProgress, Typography } from '@mui/material';

const App = () => {
  const { forecastData, loading, error } = useSelector((state) => state.weather);

  return (
    <Container>
      <h1>Weather Forecast </h1>
      <SearchBar />
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {forecastData.map((data, index) => (
          <WeatherCard key={index} data={data} />
        ))}
      </div>
    </Container>
  );
};

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default RootApp;