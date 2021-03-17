import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    alignItems: 'center',

    '& *': {
      marginLeft: '.5rem',
    },

    '& img': {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
    },
  },
});

const UserProfileDisplay = ({ label, avatar, name }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <p>{`${label}: `}</p>
      <p>{name}</p>
      {avatar && (
      <img
        src={avatar}
        alt="avatar"
      />
      )}
    </div>
  );
};

UserProfileDisplay.defaultProps = {
  avatar: undefined,
};

UserProfileDisplay.propTypes = {
  label: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default UserProfileDisplay;
