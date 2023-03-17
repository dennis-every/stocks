import { configureStore } from '@reduxjs/toolkit';
import stocksReducer from './stocks/stocksSlice';

const store = configureStore({
  reducer: {
    stocks: stocksReducer,
  },
});

export default store;
