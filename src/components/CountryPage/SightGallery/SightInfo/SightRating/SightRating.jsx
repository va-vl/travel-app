// TODO: add ratings

import * as React from 'react';
import { useParams } from 'react-router-dom';
import { queryFakeBackend } from '../../../../../utils/api';
import { api } from '../../../../../constants/api';

const { BACKEND_SIGHT_RATING } = api;

const getSightRatings = (countryId, sightId) => queryFakeBackend(
  `${BACKEND_SIGHT_RATING}${countryId}-${sightId}`,
  'GET',
);

const SightRating = ({ sightId }) => {
  const { countryId } = useParams;

  return null;
};
