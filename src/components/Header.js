import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Table Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Table List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Table
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
