import * as React from 'react';
import { Button } from '@material-ui/core';
import AuthModal from './AuthModal/AuthModal';
import { useLanguage } from '../../../../../../contexts/LanguageContext';

const Auth = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { dictionary: { LOG_IN_TO_RATE } } = useLanguage();

  const handleModalOpen = () => { setModalOpen(true); };
  const handleModalClose = () => { setModalOpen(false); };

  return (
    <div>
      <AuthModal
        open={modalOpen}
        handleClose={handleModalClose}
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

export default Auth;
