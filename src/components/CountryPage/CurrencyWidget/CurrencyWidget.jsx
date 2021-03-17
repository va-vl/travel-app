import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import withRenderControl from '../../_common/withRenderControl';

export const CURRENCIES = [
  'USD',
  'EUR',
  'RUB',
];

const CURRENCY_PRECISION = 3;

const CurrencyWidget = ({ data, countryCurrency }) => (
  <div className="widget currency">
    {
      CURRENCIES.map((cur, index) => (
        <p key={cur}>
          <span className={index === 0 ? '' : 'invis'}>
            {`1 ${countryCurrency} `}
          </span>
          <span>
            {`= ${data[cur] ? data[cur].toFixed(CURRENCY_PRECISION) : null} ${cur}`}
          </span>
        </p>
      ))
    }
  </div>
);

CurrencyWidget.propTypes = {
  countryCurrency: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default withRenderControl(CurrencyWidget, {
  DefaultComponent: () => <CircularProgress />,
});
