import * as React from 'react';
// import { Rating } from '@material-ui/lab';
import { useLanguage } from '../../../../../../contexts/LanguageContext';
import { useAuthChange } from '../../../../../../contexts/AuthContext';

const GiveRating = () => {
  // const [value, setValue] = React.useState(2);
  const { dictionary: { LOG_OUT } } = useLanguage();
  const { logout } = useAuthChange();

  return (
    <div>
      {/* <Rating
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      /> */}
      <button type="button" onClick={logout}>
        {LOG_OUT}
      </button>
    </div>
  );
};

export default GiveRating;
