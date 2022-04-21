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
  background-color: #f7f3e9;
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
  background-color: #cfb190;
  min-height: 40px;
  padding-left: 10px;

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
  background: #f7f3e9;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 0 15px;
`;

export const HeaderAccount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

export const Avatar = styled(antd.Avatar)`
  background: #0a3f35;
`;

export const Logout = styled.div`
  color: #0a3f35;
  margin-left: 10px;
  cursor: pointer;

  svg {
    margin-top: 5px;
    fill: #0a3f35;
  }
`;

export const Content = styled(antd.Layout.Content)`
  margin: 30px 0;
  background: #f7f3e9;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: 15px 0 0 15px;
  overflow: hidden;
`;

export const Footer = styled(antd.Layout.Footer)`
  box-shadow: 0 -3px 3px rgba(0, 0, 0, 0.2);
  background: #f7f3e9;
  height: 40px;
  border-radius: 15px 0 0 0;
`;
export const Title = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #0a3f35;
`;
