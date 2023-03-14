import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../redux/stocks/stocksSlice';
import Stock from './Stock';

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
      {stocksArray.map((stock) => (
        <Stock
          key={stock.symbol}
          companyName={stock.companyName}
        />
      ))}
    </>
  );
};

export default StocksContainer;
