import * as React from 'react';
import { Rating } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../../contexts/LanguageContext';

const GiveRating = ({ logout }) => {
  const [value, setValue] = React.useState(2);
  const { dictionary: { LOG_OUT } } = useLanguage();

  return (
    <div>
      <Rating
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      />
      <button type="button" onClick={logout}>
        {LOG_OUT}
      </button>
    </div>
  );
};

GiveRating.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default GiveRating;
