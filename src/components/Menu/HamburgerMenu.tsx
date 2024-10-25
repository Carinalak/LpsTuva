import styled from 'styled-components';
import { BREAKPOINT_TABLET } from '../styled/Variables';
import { useState } from 'react';
import { MenuLinks } from './MenuLinks';

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
  margin-right: 30px;
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
  top: 12px;
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


    a:hover {
      color: #80D7EA;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      padding-left: 5px;
      padding-right: 5px;
  }
  a:active {
      color: #AB3DA7;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      padding-left: 5px;
      padding-right: 5px;
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
      <HamburgerButton onClick={toggleMenu} className={isOpen ? "open" : ""}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </HamburgerButton>
      <MenuList isOpen={isOpen}>
        {MenuLinks.map((link) => (
          <li key={link.path}>
            <a href={link.path}>{link.label}</a>
          </li>
        ))}
      </MenuList>
    </MenuContainer>
  );
};