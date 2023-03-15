import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';
import { fetchStocks } from '../redux/stocks/stocksSlice';
import './StocksContainer.scss';

const StocksContainer = () => {
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => store.stocks.ifSucceed);
  const stocksArray = useSelector((store) => store.stocks.stocksArray);
  const sum = stocksArray.reduce((n, { marketCap }) => n + marketCap, 0);

  useEffect(() => {
    if (stocksArray.length === 0) {
      dispatch(fetchStocks());
    }
  }, [dispatch, ifSucceed, stocksArray]);

  return (
    <main>
      <section className="total">
        <h1>
          STOCKS TOTAL MARKET CAP
          <br />
          {sum.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </h1>
      </section>
      <section className="wrap">
        {stocksArray.map((stock, idx) => (idx % 2 === 0 ? (
          <span className="stock even" key={stock.symbol}>
            <NavLink to={`stock/${stock.symbol}`}>
              <div><BsChevronRight /></div>
              <div>
                {stock.companyName}
                <br />
                Market Cap
                <br />
                {stock.marketCap.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </div>
            </NavLink>
          </span>
        ) : (
          <span className="stock odd" key={stock.symbol}>
            <NavLink to={`stock/${stock.symbol}`}>
              <div><BsChevronRight /></div>
              <div>
                {stock.companyName}
                <br />
                Market Cap
                <br />
                {stock.marketCap.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </div>
            </NavLink>
          </span>
        )))}
      </section>
    </main>
  );
};

export default StocksContainer;
