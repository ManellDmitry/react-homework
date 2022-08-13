/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

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
`;

function Navigation() {
  const [navLinks] = useState([]);
  const handleItemClick = () => {};
  const handleLinkClick = (e) => {};
  const handleLinkMouseEnter = (e) => {};

  return (
    <nav>
      <List>
        {navLinks &&
          navLinks.map(({ id, label, path }) => (
            <Item key={id} onClick={handleItemClick}>
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
