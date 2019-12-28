import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Button } from 'reactstrap';

import Profile from '../Profile';
import './navlink.css';
export default () => (
    <div id="nav-bar">
        <Nav vertical>
            <NavItem>
                <NavLink href="#" className="nav-link">Employee Management</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="nav-link">Scores</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="nav-link">My Info</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="nav-link">Log out</NavLink>
            </NavItem>
        </Nav>
    </div>
    
)
