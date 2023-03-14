import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchStocks } from '../redux/stocks/stocksSlice';

const StocksContainer = () => {
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => store.stocks.ifSucceed);
  const stocksArray = useSelector((store) => store.stocks.stocksArray);

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch, ifSucceed]);

  return (
    <>
      <h3>LIST</h3>
      <ul>
        {stocksArray.map((stock) => (
          <li key={stock.symbol}>
            <NavLink to={`stock/${stock.symbol}`}>{stock.companyName}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StocksContainer;
