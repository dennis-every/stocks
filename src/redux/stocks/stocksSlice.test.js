import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StocksContainer from '../../components/StocksContainer';
import store from '../store';

const mockStore = configureStore([]);

describe('Stocks redux state tests', () => {
  it('expects to initially set stocks as an empty object', () => {
    const state = store.getState().stocks;
    const initialState = {
      stocksArray: [],
      ifSucceed: false,
      ifLoading: false,
      errors: null,
    };
    expect(state).toEqual(initialState);
  });
  it('expects to display one stock from mock store', () => {
    const stocksArray = [
      {
        symbol: 'AAPL',
        companyName: 'Apple Inc.',
      },
    ];
    const state = {
      stocks: {
        stocksArray,
        ifSucceed: false,
        ifLoading: false,
        errors: null,
      },
    };
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <StocksContainer />
        </BrowserRouter>
      </Provider>,
    );
    const companyName = screen.getByText('Apple Inc.');
    expect(companyName).toBeInTheDocument();
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(1);
  });
});
