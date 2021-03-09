import * as React from 'react';
import styles from './styles/styles';
import logoGithub from '../../assets/logo-github.svg';
import logoRollingScopes from '../../assets/logo-rolling-scopes.svg';

const urlRss = 'https://rs.school/js/';
const urlGithubPrefix = 'https://github.com/';

const Footer = () => {
  const classes = styles();
  const developers = [
    'velidoss',
    'arumirinka',
    'va-z',
    'reagentjs',
  ];
  const developersJsx = developers.map((dev) => (
    <a
      key={dev}
      href={urlGithubPrefix + dev}
      target="_blank"
      rel="noreferrer"
      className="github-logo"
      data-title={dev}
    >
      <img
        src={logoGithub}
        alt="github-logo"
        width="30"
      />
    </a>
  ));

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
