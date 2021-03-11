import * as React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal/Modal';

const Authorize = ({ login }) => {
  const [open, setOpen] = React.useState(false);

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
        Log in to rate
      </button>
    </div>
  );
};

Authorize.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Authorize;
