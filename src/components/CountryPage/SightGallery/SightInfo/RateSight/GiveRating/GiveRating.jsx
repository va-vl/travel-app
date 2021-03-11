import * as React from 'react';
import { Rating } from '@material-ui/lab';
import PropTypes from 'prop-types';

const GiveRating = ({ logout }) => {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      />
      <button type="button" onClick={logout}>Log out</button>
    </div>
  );
};

GiveRating.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default GiveRating;
