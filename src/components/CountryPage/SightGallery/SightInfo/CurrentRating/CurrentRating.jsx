import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import CurrentRatingModal from './CurrentRatingModal/CurrentRatingModal';
import withRenderControl from '../../../../_common/withRenderControl';
import { useLanguage } from '../../../../../contexts/LanguageContext';

const CurrentRating = ({ rating, usersArray }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const {
    dictionary: {
      CURRENT_SIGHT_RATING,
      NOT_YET_RATED,
      SEE_USERS,
    },
  } = useLanguage();

  const handleClose = () => { setIsModalVisible(false); };
  const handleOpen = () => { setIsModalVisible(true); };

  return (
    <div>
      <CurrentRatingModal
        data={usersArray}
        isVisible={isModalVisible}
        handleClose={handleClose}
      />
      {
        rating
          ? (
            <>
              <p>
                {`${CURRENT_SIGHT_RATING}: ${rating} / 5`}
              </p>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
              >
                {SEE_USERS}
              </Button>
            </>
          )
          : <div>{NOT_YET_RATED}</div>
      }
    </div>
  );
};

CurrentRating.propTypes = {
  rating: PropTypes.number.isRequired,
  usersArray: PropTypes.instanceOf(Array).isRequired,
};

export default withRenderControl(CurrentRating, {
  LoadingComponent: () => <div>now loading</div>,
  ErrorComponent: () => <div>something went wrong</div>,
});
