/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

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

function Navigation({ x }) {
  const handleItemClick = () => {};
  const handleLinkClick = (e) => {};
  const handleLinkMouseEnter = (e) => {};

  return (
    <nav>
      <List>
        {x &&
          x.map(({ id, label, path }) => (
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
