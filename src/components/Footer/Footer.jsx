import * as React from 'react';
import styles from './styles/styles';
import logoRollingScopes from '../../assets/logo-rolling-scopes.svg';
import GithubLogo from './GithubLogo/GithubLogo';
import { links } from '../../constants/index';

const {
  developers,
  urlRss,
} = links;

const Footer = () => {
  const classes = styles();
  const developersJsx = developers.map((dev) => <GithubLogo key={dev} dev={dev} />);

  return (
    <footer className={classes.root}>
      <div>
        <a
          href={urlRss}
          target="_blank"
          rel="noreferrer"
          className="rss-logo"
        >
          <img
            src={logoRollingScopes}
            alt="RSSchool-logo"
            width="75"
          />
        </a>
        <h4>2021</h4>
      </div>
      <div>
        {developersJsx}
      </div>
    </footer>
  );
};

export default Footer;
