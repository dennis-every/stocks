import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Stock from './Stock';
import store from '../redux/store';

const StockObject = {
  symbol: 'AAPL',
  companyName: 'Apple Inc.',
  marketCap: 1382174560000,
  sector: 'Technology',
  beta: 1.2284990000000000076596506914938800036907196044921875,
  price: 318.8899999999999863575794734060764312744140625,
  lastAnnualDividend: 3.0800000000000000710542735760100185871124267578125,
  volume: 51500795,
  exchangeShortName: 'NASDAQ',
};

describe('test suite for Stock component', () => {
  it('expects to render a snapshot of the Stock component', () => {
    const stockComponent = render(
      <Provider store={store}>
        <Stock
          symbol={StockObject.symbol}
          companyName={StockObject.companyName}
          sector={StockObject.sector}
          marketCap={StockObject.marketCap}
          beta={StockObject.beta}
          price={StockObject.price}
          exchangeShortName={StockObject.exchangeShortName}
          volume={StockObject.volume}
          lastAnnualDividend={StockObject.lastAnnualDividend}
        />
      </Provider>,
    );
    expect(stockComponent).toMatchSnapshot();
  });
});
