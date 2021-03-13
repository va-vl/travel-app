import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import CountryCardContainer from './CountryCard/CountryCardContainer';
import withRenderControl from '../../_common/withRenderControl';
import APIErrorComponent from '../../_common/APIErrorComponent';

const CountryList = ({ data }) => (
  <div className="cards-container">
    {
      data.map(({
        id,
        name,
        capital,
        image,
      }) => (
        <CountryCardContainer
          key={id}
          id={id}
          name={name}
          capital={capital}
          image={image}
        />
      ))
    }
  </div>
);

CountryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

export default withRenderControl(CountryList, {
  DefaultComponent: () => <CircularProgress />,
  ErrorComponent: APIErrorComponent,
});
