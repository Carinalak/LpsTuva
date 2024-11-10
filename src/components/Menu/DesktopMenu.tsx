import styled from "styled-components";
import { BREAKPOINT_TABLET, GAMMELROSA, KRITVIT, POOLBLA, SKUGGLILA } from "../styled/Variables";
import { NavLink, useLocation } from "react-router-dom";
import { MenuLinks } from "./MenuLinks";
import arrowIcon from "../../assets/icons/arrow.png";
import { useState } from "react";

export const NavigationContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 100%;
`;

export const DesktopNav = styled.nav`
  display: none;
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: block;
    width: 50%;
    //padding-left: 10px;
    //padding-right: 10px;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 5px;
      width: 70%;
      padding: 0;
      margin: 0;
      list-style: none;
     //  cursor: url(${new URL("../../assets/icons/paw_white.png", import.meta.url).href}), auto;

     // cursor: url(${new URL("/assets/icons/paw_purple.svg", import.meta.url).href}), auto;
    }

    li {
      position: relative;
      flex-grow: 1;
      text-align: center;
        -webkit-tap-highlight-color: transparent; // Tar bort blå markering på mobila enheter

      &:hover > ul {
        display: flex;
      }
    }

    a {
      font-size: 1.2rem;
      font-weight: 700;
      color: ${KRITVIT};
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 60px; // link height
      padding: 0;
      cursor: pointer;
      cursor: url(${new URL("../../assets/icons/paw_white.png", import.meta.url).href}), auto;
    }

    a > span {
      display: block;
      line-height: 1; // lineheight for text
    }

    .icon {
      width: 10px;
      height: 10px;
      position: absolute;
      bottom: 5px; // arrow under the links
    }

    li a:hover {
      color: ${SKUGGLILA}; 
    }

    li a:active:focus {
      color: ${POOLBLA};
    }

    li a:hover:active {
      color: ${POOLBLA};
    }

    /* ------------------  Submenu -------------------- */

    ul.submenu {
      display: none;
      position: absolute;
      top: 100%;
      // left: 50%;
      // transform: translateX(-50%);
      background-color: ${GAMMELROSA};
      list-style: none;
      padding: 30px 25px;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      border-radius: 5px;
      width: auto;
      gap: 0;
      text-align: left;
      flex-direction: column;
      // justify-content: center;
      z-index: 99;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    ul.submenu li {
      display: flex;
      flex-direction: row;
      align-items: start;
      gap: 0;
      margin: 0;
      padding: 0;
      text-align: left;
      white-space: nowrap;
    }

    ul.submenu li a {
      color: ${KRITVIT};
      text-align: left;
      font-weight: 600;
      font-size: 1.2rem;
      //display: flex;
      //justify-content: center;
      padding: 0;
      margin: 0;
      height: 40px;
    }

    ul.submenu li a:hover {
      color: ${SKUGGLILA};
    }

    ul.submenu li a:active {
      color: ${POOLBLA};
    }
  }
`;


export const DesktopMenu = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const location = useLocation();

  // Toggle submenu när användaren klickar på pilikonen
  const handleArrowClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault(); // Förhindra navigation när pilen klickas
    setActiveSubMenu(activeSubMenu === index ? null : index); // Växla undermenyn
  };

  const handleMainLinkClick = (index: number, path: string) => {
    if (location.pathname === path) {
      // Om vi är på samma sida, toggla undermenyn
      setActiveSubMenu(activeSubMenu === index ? null : index);
    } else {
      setActiveSubMenu(null); // Navigera bort och stäng undermenyn
    }
  };

  return (
    <DesktopNav>
      <ul>
        {MenuLinks.map((link, index) => (
          <li
            key={link.path}
            onMouseEnter={() => setActiveSubMenu(index)}
            onMouseLeave={() => setActiveSubMenu(null)}
          >
            <NavLink
              to={link.path}
              onClick={() => handleMainLinkClick(index, link.path)}
            >
              <span>{link.label}</span>
            </NavLink>

            {link.subLinks && (
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="icon"
                onClick={(e) => handleArrowClick(e, index)}
              />
            )}

            {link.subLinks && activeSubMenu === index && (
              <ul className="submenu">
                {link.subLinks.map((subLink) => (
                  <li key={subLink.path}>
                    <NavLink to={subLink.path} onClick={() => setActiveSubMenu(null)}>
                      {subLink.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </DesktopNav>
  );
};



