import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '15ca787f2d191cf1f09525804a2ce85d';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (query) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${query}`);
  return response.data;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    forecastData: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearWeatherData: (state) => {
      state.forecastData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.forecastData.push(action.payload);
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;