import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const CURRENCIES = [
  'USD',
  'EUR',
  'RUB',
];

const Currency = ({ countryCurrency }) => {
  const API_KEY = process.env.REACT_APP_CURRENCY_CONVERTER_API_KEY;
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${countryCurrency}`,
      );

      setData(result.data.conversion_rates);
    };

    fetchData();
  }, []);

  return (
    <div className="widget currency">
      {
        CURRENCIES.map((cur, index) => (
          <p key={cur}>
            <span className={index === 0 ? '' : 'invis'}>
              1&nbsp;
              {countryCurrency}
            </span>
            <span>
              &nbsp;=&nbsp;
              {data[cur] ? data[cur].toFixed(2) : null}
              &nbsp;
              {cur}
            </span>
          </p>
        ))
      }
    </div>
  );
};

Currency.propTypes = {
  countryCurrency: PropTypes.string.isRequired,
};

export default Currency;
