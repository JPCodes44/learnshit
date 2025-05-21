import React from 'react';
import { NavBarSections } from './navbarul';

export const NavBar: React.FC = () => {
    return (
        <nav style={{ padding: '1rem', background: '#222', color: '#fff', display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 'bold' }}>MyApp</div>
            <NavBarSections>
                <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
                <li><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
                <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
            </NavBarSections>
        </nav>
    );
};