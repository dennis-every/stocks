import PropTypes from 'prop-types';
import './Stock.scss';

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
    <section>
      <h1>{companyName}</h1>
      <ul>
        <li className="item even">
          <span>Symbol</span>
          <span>{symbol}</span>
        </li>
        <li className="item odd">
          <span>Market cap</span>
          <span>
            {marketCap.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </li>
        <li className="item even">
          <span>Sector</span>
          <span>{sector}</span>
        </li>
        <li className="item odd">
          <span>Beta</span>
          <span>
            {beta.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </li>
        <li className="item even">
          <span>Price</span>
          <span>
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </li>
        <li className="item odd">
          <span>Exchange</span>
          <span>{exchangeShortName}</span>
        </li>
        <li className="item even">
          <span>Volume</span>
          <span>
            {volume.toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </li>
        <li className="item odd">
          <span>Last annual dividend</span>
          <span>
            {lastAnnualDividend.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </li>
      </ul>
    </section>
  );
};

Stock.propTypes = {
  symbol: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  marketCap: PropTypes.number.isRequired,
  sector: PropTypes.string.isRequired,
  beta: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  lastAnnualDividend: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  exchangeShortName: PropTypes.string.isRequired,
};

export default Stock;
