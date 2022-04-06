import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landingpage">
      Check out these <br></br>
      <NavLink className="navlink" exact to="/books">
        Books!!!
      </NavLink>
    </div>
  );
}
