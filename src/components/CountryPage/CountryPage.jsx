import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import withRenderControl from '../_common/withRenderControl';
import { useLanguage } from '../../contexts/LanguageContext';
import stylesCommon from '../../styles/common';
import styles from './styles/styles';
import DateAndTime from './DateAndTime';

const CountryPage = ({
  name, capital, description, image, sights, timeZone,
}) => {
  const { dictionary } = useLanguage();
  const classesCommon = stylesCommon();
  const classes = styles();
  const titleAlignLeft = `${classesCommon.title} ${classesCommon.alignLeft}`;

  const goBack = (
    <Link
      to="/"
      className={classes.link}
    >
      {dictionary.GO_BACK_BUTTON}
    </Link>
  );

  const images = sights.map((item) => ({
    original: item.image,
    thumbnail: item.image,
    description: item.description,
  }));

  return (
    <div className={classes.root}>
      <h2 className={titleAlignLeft}>
        {`${name}, ${capital}`}
      </h2>

      <div className="main-content">

        <div className="info">
          <p className="description">{description}</p>
          {goBack}
          <img src={image} alt="" />
        </div>

        <aside className="aside">
          <DateAndTime timeZone={timeZone} />
          <div>widget2</div>
          <div>widget3</div>
        </aside>

      </div>

      <ImageGallery
        items={images}
        className="image-gallery"
      />

    </div>
  );
};

CountryPage.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  sights: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
  timeZone: PropTypes.number.isRequired,
};

export default withRenderControl(CountryPage, {
  LoadingComponent: <div>Loading</div>,
  ErrorComponent: <div>Something Went Wrong!</div>,
  DefaultComponent: <h1>I AM A FUCKING DEFAULT</h1>,
});
