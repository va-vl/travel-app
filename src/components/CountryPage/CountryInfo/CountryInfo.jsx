import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useLanguage } from '../../../contexts/LanguageContext';
import withRenderControl from '../../_common/withRenderControl';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CountryInfo = ({
  name, capital, description, image,
}) => {
  const { dictionary } = useLanguage();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom component="h3">
          {name}
        </Typography>
        <Typography gutterBottom component="h4">
          {capital}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/">
          <Button size="small" color="primary">{dictionary.GO_BACK_BUTTON}</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

CountryInfo.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default withRenderControl(CountryInfo, {
  LoadingComponent: <div>Loading</div>,
  ErrorComponent: <div>Something Went Wrong!</div>,
});
