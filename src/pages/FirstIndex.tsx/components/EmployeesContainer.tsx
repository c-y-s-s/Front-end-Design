import React from "react";
import styled from "styled-components";
import { device } from "../../../components/device";
import HeadShot01 from "../img/headshot01.jpg";
const EmployeesBlock = styled.div`
  text-align: center;
  margin-top: 6rem;
`;
const Employees = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;
const EmployeesItem = styled.div`
  margin: 0rem 2rem;
`;
const EmployeesImg = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  img {
    position: absolute;
    right: -105px;
    width: 400px;
  }
  @media ${device.laptopL} {
    width: 180px;
    height: 180px;
    img {
      right: -85px;
      width: 300px;
    }
  }
  @media ${device.laptop} {
    margin: 1.25rem 0;
    width: 280px;
    height: 280px;
    img {
      right: -105px;
      width: 420px;
    }
  }
`;
const EmployeesName = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  margin-top: 0.75rem;
`;
const EmployeesText = styled.div`
  color: #ccc;
  font-size: 1rem;
  font-weight: 300;
`;

const EmployeesContainer = () => {
  return (
    <div>
      {" "}
      <EmployeesBlock>
        <div>Our Team</div>
        <div>Our employees</div>

        <Employees>
          <EmployeesItem>
            <EmployeesImg>
              <img src={HeadShot01} alt=""></img>
            </EmployeesImg>
            <EmployeesName>Jane Cooper</EmployeesName>
            <EmployeesText>Developer</EmployeesText>
          </EmployeesItem>
          <EmployeesItem>
            <EmployeesImg>
              <img src={HeadShot01} alt=""></img>
            </EmployeesImg>
            <EmployeesName>Jane Cooper</EmployeesName>
            <EmployeesText>Developer</EmployeesText>
          </EmployeesItem>
          <EmployeesItem>
            <EmployeesImg>
              <img src={HeadShot01} alt=""></img>
            </EmployeesImg>
            <EmployeesName>Jane Cooper</EmployeesName>
            <EmployeesText>Developer</EmployeesText>
          </EmployeesItem>
          <EmployeesItem>
            <EmployeesImg>
              <img src={HeadShot01} alt=""></img>
            </EmployeesImg>
            <EmployeesName>Jane Cooper</EmployeesName>
            <EmployeesText>Developer</EmployeesText>
          </EmployeesItem>
        </Employees>
        <Employees>
          <EmployeesItem>
            <EmployeesImg>
              <img src={HeadShot01} alt=""></img>
            </EmployeesImg>
            <EmployeesName>Jane Cooper</EmployeesName>
            <EmployeesText>Developer</EmployeesText>
          </EmployeesItem>
          <EmployeesItem>
            <EmployeesImg>
              <img src={HeadShot01} alt=""></img>
            </EmployeesImg>
            <EmployeesName>Jane Cooper</EmployeesName>
            <EmployeesText>Developer</EmployeesText>
          </EmployeesItem>
          <EmployeesItem>
            <EmployeesImg>
              <img src={HeadShot01} alt=""></img>
            </EmployeesImg>
            <EmployeesName>Jane Cooper</EmployeesName>
            <EmployeesText>Developer</EmployeesText>
          </EmployeesItem>
          <EmployeesItem>
            <EmployeesImg>
              <img src={HeadShot01} alt=""></img>
            </EmployeesImg>
            <EmployeesName>Jane Cooper</EmployeesName>
            <EmployeesText>Developer</EmployeesText>
          </EmployeesItem>
        </Employees>
      </EmployeesBlock>
    </div>
  );
};

export default EmployeesContainer;
