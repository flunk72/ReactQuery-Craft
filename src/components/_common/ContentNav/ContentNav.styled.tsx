import styled from "styled-components";
import * as router from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  min-height: 40px;
  background-color: #cfb190;
`;

export const NavLink = styled(router.NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  &:hover {
    transition: 0.5s;
    background-color: #0a3f35;
    color: #fff;

    u {
      color: #fff;
    }
  }

  &.active {
    background-color: #0a3f35;
    color: #fff;

    u {
      color: #fff;
    }
  }

  u {
    color: #0a3f35;
    text-decoration: none;
  }
`;
