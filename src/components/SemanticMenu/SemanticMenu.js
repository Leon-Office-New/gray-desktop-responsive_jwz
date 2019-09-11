import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SemanticMenu = props => {
  let { links, className } = props;

  return (
    <nav className={className}>
      <ul>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

SemanticMenu.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array
};

SemanticMenu.defaultProps = {
  className: '',
  links: []
};

export default SemanticMenu;
