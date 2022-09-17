import React from "react";
import styled from "styled-components";
import { device } from "../../../components/device";
import BigNewYork from "../img/background.jpg";

const NavContainer = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0rem;
  @media ${device.laptop} {
    display: block;
    text-align: center;
  }

  @media ${device.tablet} {
    display: block;
    padding: 1.8rem 0rem 0.8rem 0;
  }
`;
const NavTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 2px;
`;
const NavOptions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  li {
    padding: 0 1.75rem;
  }
  @media ${device.laptop} {
    justify-content: space-around;
    padding: 0 0rem;
  }
  @media ${device.mobileL} {
    padding: 0 0rem;
    li {
      padding: 0 0rem;
    }
  }
`;

const Nav = () => {
  return (
    <>
      <NavContainer>
        <NavTitle>BUSIN</NavTitle>
        <NavOptions>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Shop</li>
          <li>Support</li>
        </NavOptions>
      </NavContainer>
    </>
  );
};

export default Nav;
