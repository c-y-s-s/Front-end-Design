import React from "react";
import styled from "styled-components";

const FooterBlock = styled.footer`
  background: #272727;
  color: white;
  text-align: center;
  padding: 4.8rem 0;
`;

const FooterName = styled.div`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 2px;
`;
const FooterCompanyData = styled.div`
  color: #bebebe;
  padding-top: 1.5rem;
  line-height: 1.8rem;
`;
const FooterCompanyAddress = styled.div`
  color: #bebebe;
  padding-top: 1.5rem;
  line-height: 1.8rem;
`;

const Footer = () => {
  return (
    <>
      <FooterBlock>
        <FooterName>BUSIN</FooterName>
        <FooterCompanyData>
          Info@yourdomain.com
          <br /> +68 120034509
        </FooterCompanyData>
        <FooterCompanyAddress>
          2005 Stokes lsle Apt. 896, Venaville,
          <br /> New York 10010,United State
        </FooterCompanyAddress>
      </FooterBlock>
    </>
  );
};

export default Footer;
