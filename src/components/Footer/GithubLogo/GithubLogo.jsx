import * as React from 'react';
import PropTypes from 'prop-types';
import logoGithub from '../../../assets/logo-github.svg';
import { links } from '../../../constants/index';

const { urlGithubPrefix } = links;

const GithubLogo = ({ dev }) => (
  <a
    key={dev}
    href={`${urlGithubPrefix}${dev}`}
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
);

GithubLogo.propTypes = {
  dev: PropTypes.string.isRequired,
};

export default GithubLogo;
