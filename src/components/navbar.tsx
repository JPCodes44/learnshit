import React from 'react';
import { NavBarSections } from './navbarul';
import { NavBarList } from './navbarlist';

export const NavBar: React.FC = () => {
    return (
        <nav style={{ padding: '1rem', background: '#222', color: '#fff', display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 'bold' }}>MyApp</div>
            <NavBarSections>
                <NavBarList href='/'>home</NavBarList>
                <NavBarList href='/About'>about</NavBarList>
                <NavBarList href='/About'>contact</NavBarList>
            </NavBarSections>
        </nav>
    );
};