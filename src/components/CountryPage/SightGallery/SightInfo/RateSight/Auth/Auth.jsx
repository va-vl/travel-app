import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import AuthModal from './AuthModal/AuthModal';
import { useLanguage } from '../../../../../../contexts/LanguageContext';

const Auth = ({ login }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { dictionary: { LOG_IN_TO_RATE } } = useLanguage();

  const handleModalOpen = () => { setModalOpen(true); };
  const handleModalClose = () => { setModalOpen(false); };
  const handleModalSubmit = (token) => {
    console.log(login);
    console.log(token);
  };

  return (
    <div>
      <AuthModal
        open={modalOpen}
        handleClose={handleModalClose}
        handleSubmit={handleModalSubmit}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleModalOpen}
      >
        {LOG_IN_TO_RATE}
      </Button>
    </div>
  );
};

Auth.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Auth;
