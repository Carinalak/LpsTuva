import React, { useState } from 'react';
import styled from 'styled-components';
import { BREAKPOINT_TABLET } from './styled/Variables';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 10;
`;

const HamburgerButton = styled.div`
  width: 35px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 100;

  .line {
    width: 100%;
    height: 5px;
    background-color: #FFFFFF;
    border-radius: 10px;
    transition: transform 0.3s, opacity 0.3s;
  }

  &.open div:nth-child(1) {
    transform: rotate(45deg) translate(5px, 13px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -13px);
  }
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: none;
  }
`;

const MenuList = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  right: 0;
  background: #EF8CEB;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  list-style-type: none;

  li {
    margin: 5px 0;

    a {
      text-decoration: none;
      color: #FFFFFF;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
    }
  }
`;

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <HamburgerButton onClick={toggleMenu} className={isOpen ? 'open' : ''}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </HamburgerButton>
      <MenuList isOpen={isOpen}>
        <li>
          <a href="/">Hem</a>
        </li>
        <li>
          <a href="/galleri">Galleri</a>
        </li>
        <li>
          <a href="/kontakt">Kontakt</a>
        </li>
      </MenuList>
    </MenuContainer>
  );
};














// -------------------------- With ordinary icom ----------------------------------- //
// src/components/HamburgerMenu.tsx

/*
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BREAKPOINT_TABLET } from './styled/Variables';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 10;
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  font-size: 30px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: none;
  }
`;

const MenuList = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 20px;
  right: 0;
  background: #EF8CEB;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  list-style-type: none;

  li {
    margin: 5px 0;

    a {
      text-decoration: none;
      color: #FFFFFF;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
    }
  }
`;

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <HamburgerIcon onClick={toggleMenu}>
        &#9776; // Hamburger-symbol 
      </HamburgerIcon>
      <MenuList isOpen={isOpen}>
        <li>
          <NavLink to="/">Hem</NavLink>
        </li>
        <li>
          <NavLink to="/galleri">Galleri</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
      </MenuList>
    </MenuContainer>
  );
};
*/