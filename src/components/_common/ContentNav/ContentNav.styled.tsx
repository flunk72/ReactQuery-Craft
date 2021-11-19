import styled from "styled-components";
import * as router from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  min-height: 40px;
  background-color: #eee2dc;
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
    background-color: #ac3b61;
    color: #fff;

    u {
      color: #fff;
    }
  }

  &.active {
    background-color: #ac3b61;
    color: #fff;

    u {
      color: #fff;
    }
  }

  u {
    color: #123c69;
    text-decoration: none;
  }
`;
