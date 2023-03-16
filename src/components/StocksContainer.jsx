import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsBarChartLineFill } from 'react-icons/bs';
import { MdCandlestickChart } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';

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
        <div className="icon">
          <BsBarChartLineFill />
        </div>
        <div className="title">
          <div>
            <span className="text">TOTAL</span>
            <br />
            <span className="value">
              {sum.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>
      </section>
      <section className="header">
        <span>Stats by company</span>
      </section>
      <section className="stocks">
        {stocksArray.map((stock) => (
          <span className="stock" key={stock.symbol}>
            <NavLink to={`stock/${stock.symbol}`}>
              <div className="topHalf">
                <div className="icon">
                  <MdCandlestickChart />
                </div>
                <div className="arrow">
                  <AiOutlineArrowRight />
                </div>
              </div>
              <div className="bottomHalf">
                {stock.symbol}
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
        ))}
      </section>
    </main>
  );
};

export default StocksContainer;
