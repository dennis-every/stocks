import Stock from './Stock';

const StocksContainer = () => {
  const stocks = [{ ticker: 'AAPL' }, { ticker: 'AMZN' }, { ticker: 'TSLA' }];

  return (
    <>
      <h3>LIST</h3>
      {stocks.map((stock) => (
        <Stock
          key={stock.ticker}
          ticker={stock.ticker}
        />
      ))}
    </>
  );
};

export default StocksContainer;
