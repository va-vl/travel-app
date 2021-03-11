import * as React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal/Modal';
import { useLanguage } from '../../../../../../contexts/LanguageContext';

const Authorize = ({ login }) => {
  const [open, setOpen] = React.useState(false);
  const { dictionary: { LOG_IN_TO_RATE } } = useLanguage();

  const handleModalOpen = () => { setOpen(true); };
  const handleModalClose = () => { setOpen(false); };
  const handleModalSubmit = () => {
    login('fake-token');
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} handleClose={handleModalClose} handleSubmit={handleModalSubmit} />
      <button
        type="button"
        onClick={handleModalOpen}
      >
        {LOG_IN_TO_RATE}
      </button>
    </div>
  );
};

Authorize.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Authorize;
