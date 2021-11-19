import React, { useMemo } from "react";
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import {
  Wrapper,
  MenuStyled,
  Main,
  HeaderWrapper,
  Content,
  HeaderAccount,
  Title,
  MenuItem,
  Footer,
  Logout,
  Logo,
  Avatar,
} from "./Layout.styled";
import { UserOutlined } from "@ant-design/icons";
import { ExitIcon, BeerIcon, CraftIcon, SettingsIcon } from "../../_assets";
import CraftBeer from "../../CraftBeer";
import Settings from "../../Settings";

const Layout = () => {
  const { userNav, activeNavItem } = useNav();
  const { pathname } = useLocation();

  return (
    <>
      <Wrapper>
        <MenuStyled>
          <Logo>
            <BeerIcon />
          </Logo>
          {userNav.map((link) => (
            <MenuItem key={link.path} to={link.path}>
              <div>{link.icon}</div>
              <u>{link.name}</u>
            </MenuItem>
          ))}
          <Outlet />
        </MenuStyled>

        <Main>
          <HeaderWrapper>
            <Title>{activeNavItem?.name}</Title>
            <HeaderAccount>
              <Avatar size={36} icon={<UserOutlined />} />
              <Logout to="/" className="" title="Выход">
                <ExitIcon />
              </Logout>
            </HeaderAccount>
          </HeaderWrapper>
          <Content key={pathname}>
            <Routes>
              <Route path="craft-beer/*" element={<CraftBeer />}></Route>
              <Route path="settings/*" element={<Settings />}></Route>
              <Route path="" element={<Navigate to="craft-beer/russia" />} />
            </Routes>
          </Content>
          <Footer> какая то информация</Footer>
        </Main>
      </Wrapper>
    </>
  );
};

function useNav() {
  const links = useMemo(
    () => [
      { name: "Крафтовое пиво", path: "craft-beer", icon: <CraftIcon /> },
      { name: "Настройки", path: "settings", icon: <SettingsIcon /> },
    ],
    []
  );

  const { pathname } = useLocation();

  const userNav = useMemo(() => {
    return links.map((item) => {
      return item;
    });
  }, [links]);

  const activeNavItem = useMemo(() => {
    return links.find((item) => pathname.includes(item.path));
  }, [links, pathname]);

  return { userNav, activeNavItem };
}

export default Layout;
