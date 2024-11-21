import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./Themes";

const Dropdown = styled.select`
  margin-right: 20px;
  padding: 5px;
  background-color: ${(props) => props.theme.smutsrosa};
  color: ${(props) => props.theme.skugglila};
  border: 1px solid ${(props) => props.theme.skugglila};
  border-radius: 4px;
  
`;

export const ColorSchemeDropdown: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ColorSchemeDropdown must be used within a CustomThemeProvider");
  }

  const { changeTheme } = themeContext;

  return (
    <Dropdown onChange={(e) => changeTheme(e.target.value)}>
      <option value="default">Standard</option>
      <option value="christmas">Jul</option>
    </Dropdown>
  );
};
