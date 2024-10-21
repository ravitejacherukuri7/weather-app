import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';
import { TextField, Button } from '@mui/material';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query) {
      dispatch(fetchWeather(query));
      setQuery('');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <TextField
        label="Search City"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;