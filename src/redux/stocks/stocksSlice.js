import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const STOCKS_URL = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=14ad5f661b65effdf904ec38ab1072d1';

const initialState = {
  stocksArray: [],
  ifSucceed: false,
  ifLoading: false,
  errors: null,
};

export const fetchStocks = createAsyncThunk('stocks/fetchStocks', async () => {
  try {
    const response = await axios.get(STOCKS_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchStocks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        ifSucceed: true,
        stocksArray: action.payload,
      }))
      .addCase(fetchStocks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default stocksSlice.reducer;
