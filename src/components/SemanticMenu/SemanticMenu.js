import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SemanticMenu = props => {
  let { links, className } = props;

  return (
    <nav className={className}>
      <ul>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <NavLink activeClassName="active-link" to={item.path}>
                {item.text}
              </NavLink>
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
