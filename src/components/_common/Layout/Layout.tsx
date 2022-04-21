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
import { ExitIcon, BeerIcon, CraftIcon, SettingsIcon } from "../../_assets";
import CraftBeer from "../../CraftBeer";
import Settings from "../../Settings";

const Layout = () => {
  const { userNav, activeNavItem } = useNav();
  const { pathname } = useLocation();

  const onExit = () => {
    window.location.assign("http://localhost:3000/");
  };

  return (
    <>
      <Wrapper>
        <MenuStyled>
          <Logo>
            <BeerIcon />
          </Logo>
          {userNav.map((link) => (
            <MenuItem key={link.path} to={link.path}>
              <u>{link.name}</u>
            </MenuItem>
          ))}
          <Outlet />
        </MenuStyled>

        <Main>
          <HeaderWrapper>
            <Title>{activeNavItem?.name}</Title>
            <HeaderAccount>
              <Avatar size={36} src="https://joeschmoe.io/api/v1/random" />
              <Logout className="" title="Выход" onClick={onExit}>
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
          <Footer>
            <h1>Алкоголь вредит вашему здоровью</h1>
          </Footer>
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
