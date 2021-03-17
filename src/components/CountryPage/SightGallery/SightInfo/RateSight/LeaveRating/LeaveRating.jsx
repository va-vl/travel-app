import * as React from 'react';
import { Rating } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import { useLanguage } from '../../../../../../contexts/LanguageContext';
import { useAuthChange } from '../../../../../../contexts/AuthContext';

const LeaveRating = () => {
  const [isRated, setIsRated] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const { dictionary: { LOG_OUT } } = useLanguage();
  const { logout } = useAuthChange();

  return (
    <div>
      <Rating
        disabled={isRated}
        value={value}
        onChange={(_, newValue) => {
          setIsRated(true);
          setValue(newValue);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={logout}
      >
        {LOG_OUT}
      </Button>
    </div>
  );
};

export default LeaveRating;
