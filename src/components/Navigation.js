import React from "react";
import styled from "styled-components";

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
          x.map(({ id, label }) => (
            <Item key={id} onClick={handleItemClick}>
              <a
                to=""
                onClick={handleLinkClick}
                onMouseEnter={handleLinkMouseEnter}
              >
                {label}
              </a>
            </Item>
          ))}
      </List>
    </nav>
  );
}

export default Navigation;
