import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsBarChartLineFill, BsXLg } from 'react-icons/bs';
import { MdCandlestickChart } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Form } from 'react-bootstrap';
import { fetchStocks } from '../redux/stocks/stocksSlice';
import './StocksContainer.scss';

const StocksContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => store.stocks.ifSucceed);
  const stocksArray = useSelector((store) => store.stocks.stocksArray);
  const sum = stocksArray.reduce((n, { marketCap }) => n + marketCap, 0);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (stocksArray.length === 0) {
      dispatch(fetchStocks());
    }
  }, [dispatch, ifSucceed, stocksArray]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchForm = document.getElementById('searchForm');
    searchForm.classList.replace('show', 'hide');
    searchForm.reset();
  };

  const handleCloseSearch = () => {
    const searchFormContainer = document.getElementById('searchFormContainer');
    searchFormContainer.classList.replace('show', 'hide');
    const searchForm = document.getElementById('searchForm');
    searchForm.reset();
    setSearchTerm('');
  };

  const filteredArray = stocksArray.filter((stock) => {
    if (searchTerm === '') { return stock; }
    if (stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())) {
      return stock;
    }
    return '';
  });

  let stocksList = '';

  if (filteredArray.length === 0) {
    stocksList = 'NO COMPANIES FOUND';
  } else {
    stocksList = (
      filteredArray.map((stock) => (
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
      ))
    );
  }

  return (
    <>
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
          {stocksList}
        </section>
      </main>
      <section id="searchFormContainer" className="hide">
        <Form id="searchForm" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Search company ticker"
            onChange={(e) => handleChange(e)}
          />
          <div id="closeSearch">
            <BsXLg onClick={handleCloseSearch} />
          </div>
        </Form>
      </section>
    </>
  );
};

export default StocksContainer;
