import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import withRenderControl from '../../_common/withRenderControl';

const CURRENCIES = [
  'USD',
  'EUR',
  'RUB',
];

const CurrencyWidget = ({ data, countryCurrency }) => (
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

CurrencyWidget.propTypes = {
  countryCurrency: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default withRenderControl(CurrencyWidget, {
  DefaultComponent: () => <CircularProgress />,
});
