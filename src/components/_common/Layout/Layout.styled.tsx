import styled from "styled-components";
import * as router from "react-router-dom";
import * as antd from "antd";

export const Wrapper = styled(antd.Layout)`
  min-height: 100vh;
`;

export const MenuStyled = styled(antd.Layout.Sider)`
  position: fixed;
  overflow: auto;
  height: 100vh;
  left: 0;
  background-color: #edc7b7;
  box-shadow: 3px -3px 3px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px 0 10px;
`;

export const MenuItem = styled(router.NavLink)`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  background-color: #eee2dc;
  min-height: 40px;
  padding-left: 10px;
  border-bottom: 1px solid #ac3b61;

  &:first-child {
    border-top: 1px solid #ac3b61;
  }

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
  svg {
    margin-top: 5px;
  }
`;

export const Main = styled(antd.Layout)`
  @media (min-width: 800px) {
    margin-left: 235px;
  }
`;

export const HeaderWrapper = styled(antd.Layout.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #edc7b7;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
`;
export const HeaderAccount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;
export const Avatar = styled(antd.Avatar)`
  background: #ac3b61;
`;
export const Logout = styled(router.NavLink)`
  color: #123c69;
  margin-left: 10px;

  svg {
    margin-top: 5px;
    fill: #ac3b61;
  }
`;

export const Content = styled(antd.Layout.Content)`
  margin: 30px 0;
  background: #edc7b7;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
`;

export const Footer = styled(antd.Layout.Footer)`
  box-shadow: 0 -3px 3px rgba(0, 0, 0, 0.2);
  background: #edc7b7;
  height: 40px;
`;
export const Title = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #123c69;
`;
