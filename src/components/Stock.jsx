import PropTypes from 'prop-types';

const Stock = (props) => {
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
  } = props;

  return (
    <>
      <h3>{`Name: ${companyName}`}</h3>
      <ul>
        <li>{`Symbol: ${symbol}`}</li>
        <li>{`Market cap: ${marketCap}`}</li>
        <li>{`Sector: ${sector}`}</li>
        <li>{`Beta: ${beta}`}</li>
        <li>{`Price: ${price}`}</li>
        <li>{`Exchange: ${exchangeShortName}`}</li>
        <li>{`Volume: ${volume}`}</li>
        <li>{`Last annual dividend: ${lastAnnualDividend}`}</li>
      </ul>
    </>
  );
};

Stock.propTypes = {
  symbol: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  marketCap: PropTypes.string.isRequired,
  sector: PropTypes.string.isRequired,
  beta: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  lastAnnualDividend: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  exchangeShortName: PropTypes.string.isRequired,
};

export default Stock;
