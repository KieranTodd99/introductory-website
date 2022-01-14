import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={require("../../components/pages/Images/Logo.png")}
            alt="logo"
            height={"70"}
            width={"70"}
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/hobbies" activeStyle className={"a"}>
            Hobbies
          </NavLink>
          <NavLink to="/gus" activeStyle>
            Gus
          </NavLink>
          <NavLink to="/achivements" activeStyle>
            Achivements
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
