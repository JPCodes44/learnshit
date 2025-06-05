import React from 'react';
import { NavBarSections } from './NavBarSections';
import { NavBarList } from './NavBarList';
import { Menu } from "lucide-react";
import { NavProps } from '../../settings/default';

const HamburgerButton: React.FC = () => {
    return(<button
      aria-label="Open menu"
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "white",
        padding: "8px",
      }}
    >
      <Menu size={24} />
    </button>)
  };

const NavHeader = ({children}: NavProps) => {
    return(
    <div style={{ fontWeight: 'bold' }}>{children}</div>
    )
}


export const NavBar: React.FC = () => {
    return (
        <nav style={{ padding: '1rem', background: '#222', color: '#fff', display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
            <HamburgerButton />
            <NavHeader>MyApp</NavHeader>
            <NavBarSections>
                <NavBarList href='/'>home</NavBarList>
                <NavBarList href='/About'>about</NavBarList>
                <NavBarList href='/About'>contact</NavBarList>
            </NavBarSections>
        </nav>
    );
};