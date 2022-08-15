/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { ThemeContext } from "../contexts/ThemeContext";

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-right: 40px;
  font-size: 12px;
  a:hover {
    color: aqua;
    transition: 1s ease;
  }
  @media screen and (min-width: 320px) {
    margin-right: 6em;
  }
`;

function Navigation() {
  const { navLinks } = useContext(AppContext);
  const { colors, styles } = useContext(ThemeContext);
  const handleItemClick = () => {};
  const handleLinkClick = (e) => {};
  const handleLinkMouseEnter = (e) => {};

  return (
    <nav>
      <List>
        {navLinks &&
          navLinks.map(({ id, label, path }) => (
            <Item key={id} onClick={handleItemClick} contextStyles={styles}>
              <Link
                to={`/${path}`}
                onClick={handleLinkClick}
                onMouseEnter={handleLinkMouseEnter}
              >
                {label}
              </Link>
            </Item>
          ))}
      </List>
      <Outlet />
    </nav>
  );
}

export default Navigation;
