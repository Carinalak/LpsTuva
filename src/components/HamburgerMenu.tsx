
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
  //position: fixed;
  //top: 20px;
  //right: 20px;
  margin-right: 17px;
  width: 40px;
  height: 35px;
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
    transform: rotate(45deg) translate(5px, 16px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -16px);
  }
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: none;
  }
`;

const MenuList = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  top: 25px;
  right: 0;
  height: 500px;
  width: 80vw;
  background: #EF8CEB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 10px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 99;

  li {
    list-style-type: none;

    a {
      font-size: 2rem;
      color: #FFFFFF;
      text-decoration: none;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      padding: 10px;
    }
  }

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: none;
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
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
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