import PropTypes from 'prop-types';

const Stock = (props) => {
  const { ticker } = props;
  return (
    <>
      <h3>{ticker}</h3>
    </>
  );
};

Stock.propTypes = {
  ticker: PropTypes.string.isRequired,
};

export default Stock;
