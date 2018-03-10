import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-Active" exact={true}>Home</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-Active">Add</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-Active">Help</NavLink></li>
        </ul>
    </header>
);
export default Header;
