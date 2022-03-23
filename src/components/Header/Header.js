import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      {/* <NavLink exact to="/">
        Home
      </NavLink> */}
      <NavLink exact to="/books/:id">
        Books Detail
      </NavLink>
    </div>
  );
}
