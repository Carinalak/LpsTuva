import styled from 'styled-components';
import { BREAKPOINT_TABLET, GAMMELROSA, KRITVIT, POOLBLA, SKUGGLILA } from '../styled/Variables';
import { useState, useEffect } from 'react';
import { MenuLinks } from './MenuLinks';
import myCustomArrow from "../../assets/icons/arrow.svg";
import pawPurple from "../../assets/icons/paw_purple.svg";
import { NavLink } from 'react-router-dom';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 10;
`;

const HamburgerButton = styled.div`
  position: relative;
  top: 0;
  right: 30px;
  margin-right: 0;
  margin-top: 0;
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
    background-color: ${KRITVIT};
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
  position: absolute;
  top: -20px;
  right: 0;
  margin-top: 0;
  margin-right: 0;
  width: 80vw;
  padding-top: 60px;
  padding-bottom: 100px;
  margin-bottom: 100px;
  background: ${GAMMELROSA};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 10px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 99;
  overflow: hidden;

  li {
    list-style-type: none;
    width: 100%;
    padding-top: 3px;
    padding-bottom: 3px;
    cursor: url(${new URL("../../assets/icons/paw_purple.svg", import.meta.url).href}), auto;
    //cursor: url(${pawPurple}), auto;

    span,
    a {
      font-size: 1.5rem;
      line-height: 1rem;
      font-weight: 600;
      padding: 10px 15px;
      padding-left: 10px;
      color: #FFFFFF;
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      cursor: url(${pawPurple}), auto;

      &:hover {
        color: ${SKUGGLILA};
        border-radius: 5px;
      }
    }

    span:active,
    a:active {
      color: ${POOLBLA};
      border-radius: 5px;
    }

    &:not(:last-child) {
      border-bottom: 1px solid white;
    }
  }

  .submenu {
    display: none;
    flex-direction: column;
    padding-left: 50px;
    color: ${GAMMELROSA};
  }

  .submenu.open {
    display: flex;
  }

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: none;
  }
`;

type ArrowIconProps = {
  isOpen: boolean;
};

const ArrowIcon: React.FC<ArrowIconProps> = ({ isOpen }) => (
  <img
    src={myCustomArrow}
    alt="Arrow icon"
    style={{
      width: '15px',
      height: '15px',
      transition: 'transform 0.3s',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      marginRight: '10px',
      verticalAlign: 'middle',
    }}
  />
);

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleSubMenu = (path: string) => {
    setOpenSubMenu(openSubMenu === path ? null : path);
  };

  return (
    <MenuContainer>
      <HamburgerButton onClick={toggleMenu} className={isOpen ? 'open' : ''}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </HamburgerButton>
      <MenuList isOpen={isOpen}>
        {MenuLinks.map((link) => (
          <li key={link.path}>
            {link.subLinks ? (
              <span onClick={() => toggleSubMenu(link.path)}>
                {link.label}
                <ArrowIcon isOpen={openSubMenu === link.path} />
              </span>
            ) : (
              <NavLink to={link.path} onClick={closeMenu}>
                {link.label}
              </NavLink>
            )}

            {link.subLinks && (
              <ul className={`submenu ${openSubMenu === link.path ? 'open' : ''}`}>
                {link.subLinks.map((subLink) => (
                  <li key={subLink.path}>
                    <NavLink
                      to={subLink.path}
                      onClick={closeMenu}
                      rel="noopener noreferrer"
                    >
                      {subLink.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </MenuList>
    </MenuContainer>
  );
};
