import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StockComponent from '../components/Stock';

const Stock = () => {
  const { slug } = useParams();
  const stocksArray = useSelector((store) => store.stocks.stocksArray);
  const content = stocksArray.find((stock) => stock.symbol === slug);
  const {
    symbol,
    companyName,
    sector,
    marketCap,
    beta,
    price,
    exchangeShortName,
    volume,
    lastAnnualDividend,
  } = content;

  return (
    <>
      <StockComponent
        symbol={symbol}
        companyName={companyName}
        sector={sector}
        marketCap={marketCap}
        beta={beta}
        price={price}
        exchangeShortName={exchangeShortName}
        volume={volume}
        lastAnnualDividend={lastAnnualDividend}
      />
    </>
  );
};

export default Stock;
