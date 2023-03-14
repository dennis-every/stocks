import PropTypes from 'prop-types';

const Stock = (props) => {
  const { companyName } = props;
  return (
    <>
      <h3>{companyName}</h3>
    </>
  );
};

Stock.propTypes = {
  companyName: PropTypes.string.isRequired,
};

export default Stock;
