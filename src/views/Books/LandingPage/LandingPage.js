import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      Check out
      <NavLink exact to="/books">
        Books
      </NavLink>
      ;
    </div>
  );
}
