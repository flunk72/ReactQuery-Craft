import React from "react";
import { Nav, NavLink } from "./ContentNav.styled";
import { Outlet } from "react-router-dom";

interface Props {
  links: {
    name: string;
    path: string;
  }[];
}

const ContentNav = ({ links, ...restProps }: Props) => {
  return (
    <Nav {...restProps}>
      {links.map((link) => (
        <NavLink key={link.path} to={link.path}>
          <u>{link.name}</u>
        </NavLink>
      ))}
      <Outlet />
    </Nav>
  );
};

export default ContentNav;
