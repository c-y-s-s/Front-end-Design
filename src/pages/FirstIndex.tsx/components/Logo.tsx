import React from "react";
import styled from "styled-components";
import { device } from "../../../components/device";
import FaceBookLogo from "../img/facebook.svg";
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoItemContainer = styled.div`
  display: flex;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  margin: 7rem 0 7rem 0;
  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;
const LogoItem = styled.div`
  padding: 3.5rem 5rem;
  @media ${device.laptopL} {
    padding: 3.5rem 3rem;
  }
  @media ${device.laptop} {
    padding: 3.5rem 1.3rem;
  }
`;
const LogoImg = styled.img`
  width: 150px;
  height: 150px;
`;

const Logo = () => {
  return (
    <>
      <LogoContainer>
        <LogoItemContainer>
          <LogoItem>
            <LogoImg src={FaceBookLogo} />
          </LogoItem>
          <LogoItem>
            <LogoImg src={FaceBookLogo} />
          </LogoItem>
          <LogoItem>
            <LogoImg src={FaceBookLogo} />
          </LogoItem>
          <LogoItem>
            <LogoImg src={FaceBookLogo} />
          </LogoItem>
        </LogoItemContainer>
      </LogoContainer>
    </>
  );
};

export default Logo;
