import React from "react";
import styled from "styled-components";
import BigNewYork from "./img/background.jpg";
import Work01 from "./img/work1.jpg";
import Work02 from "./img/work2.jpg";
import Coffee from "./img/coffee.jpg";
import Lightbulb from "./img/lightbulb.jpg";
import Roadsign from "./img/roadsign.jpg";
import ComputeIMG from "./img/compute.jpg";
import HeadShot01 from "./img/headshot01.jpg";
const Nav = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0rem;
`;
const NavTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 2px;
`;
const NavOptions = styled.ul`
  display: flex;
  list-style-type: none;
  li {
    padding: 0 1.75rem;
  }
`;

const CenterPhoto = styled.div``;
const Photo = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0.35) 100%
    ),
    url("${BigNewYork}");
  background-position: 50% 80%;
  background-size: cover;
  width: 100%;
  height: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: #fff;
    font-size: 50px;
    letter-spacing: 4px;
  }
  div {
    color: #fff;
    letter-spacing: 2px;
    font-weight: 300;
  }
`;

const CenterContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CenterTitle = styled.div`
  margin: 5rem 0 0 0;
`;
const CenterContent = styled.div`
  text-align: center;
  div:nth-child(1) {
    font-size: 2rem;
    margin-top: 1.5rem;
    font-weight: 800;
    color: #364c59;
  }

  div:nth-child(2) {
    margin-top: 1.5rem;
  }
  div:nth-child(2),
  div:nth-child(3) {
    color: #aaa;
  }
`;
const WorkPhoto = styled.div`
  display: flex;
  margin-top: 4rem;
  flex-wrap: wrap;
  div {
    width: 650px;
    height: 630px;
    margin: 0 1rem;
    background-size: cover;
    border-radius: 5px;
  }
  div:nth-child(1) {
    background-image: url("${Work01}");
  }
  div:nth-child(2) {
    background-image: url("${Work02}");
  }
`;
const LittlePhoto = styled.div`
  display: flex;
  margin-top: 7rem;
  flex-wrap: wrap;
  > div {
    width: 420px;
    height: 550px;
    margin: 0 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0 2rem 5rem 2rem;
    color: #fff;
    border-radius: 2px;
    div:nth-child(1) {
      font-size: 1.45rem;
    }
    div:nth-child(2) {
      margin-top: 2rem;
      text-align: center;
      font-weight: 200;
    }
  }

  > div:nth-child(1) {
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.03) 50%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      url("${Coffee}");
    background-size: cover;
    background-position: 55% 50%;
  }

  > div:nth-child(2) {
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.03) 50%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      url("${Lightbulb}");
    background-size: cover;
    background-position: 55% 50%;
  }
  > div:nth-child(3) {
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.03) 50%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      url("${Roadsign}");
    background-size: cover;
  }
`;

const NewsContainer = styled.div`
  display: flex;
  margin-top: 9rem;
`;
const Compute = styled.img`
  min-width: 50%;
flex-grow:5
  background-size: cover;
`;
const Content = styled.div`
  min-width: 50%;

  background: #d9ebfc;
  display: flex;

  flex-direction: column;
  justify-content: center;
  padding-left: 5rem;
  padding: 5rem 0 5rem 5rem;
`;

const ContentBlock = styled.div`
  > div:nth-child(1) {
  }
  > div:nth-child(2) {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin: 2.5rem 0rem;
  }
`;

const ContentItem = styled.div`
  > div {
    margin-top: 1.25rem;
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
`;
const ContentLine = styled.div`
  height: 15px;

  border-radius: 20px;
  margin: 0.9rem 0 0 0;
  background: #fff;
  div {
    width: 90%;
    background: #6784eb;
    border-radius: 20px;
  }
`;

const SecondContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  background: #f7f7f7;
  padding: 3.5rem 0 0 0;
`;
const LeftContent = styled.div`
  height: 100%;

  div:nth-child(2) {
    padding: 2rem 0 0 0;
    font-size: 2rem;
  }
  div:nth-child(3) {
    margin: 6rem 0 0 0;
    display: flex;

    div {
      width: 50%;
      border: 2px solid #9e9e9e;
      padding: 1rem;
      text-align: center;
      font-weight: 900;
    }
  }
`;

const RightContentContainer = styled.div`
  margin-left: 10rem;
`;
const RightContent = styled.div`
  height: 100%;
  display: flex;
  margin: 2rem 0;
  > div:nth-child(1) {
    font-size: 4.5rem;
    display: flex;
    align-items: center;
    font-weight: 300;
    padding-right: 1.5rem;
    color: #6784eb;
  }

  > div:nth-child(2) {
    div: nth-child(1) {
      margin-bottom: 1rem;
      font-weight: 900;
      font-size: 18px;
      color: black;
    }
    div {
      color: #9e9e9e;
    }
  }
`;

const EmployeesContainer = styled.div`
  text-align: center;
  margin-top: 6rem;
  div:nth-child(2) {
    margin: 2rem 0 1rem 0;
    font-size: 2rem;
    font-weight: 800;
  }
`;
const Employees = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
`;
const EmployeesName = styled.div``;
const EmployeesText = styled.div`
  color: #ccc;
  font-size: 1.5rem;
`;
const FirstIndex = () => {
  return (
    <>
      <Nav>
        <NavTitle>BUSIN</NavTitle>
        <NavOptions>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Shop</li>
          <li>Support</li>
        </NavOptions>
      </Nav>

      <CenterPhoto>
        <Photo>
          <h2>About Us</h2>
          <div>We help startups and digital agencies launch</div>
          <div>projects on time</div>
        </Photo>
      </CenterPhoto>

      <CenterContainer>
        <CenterTitle>Make it Stunning</CenterTitle>
        <CenterContent>
          <div>Something about us</div>
          <div>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative to
          </div>
          <div>
            corporate strategy to the table win-win survival strategies to
            ensure
          </div>
        </CenterContent>
        <WorkPhoto>
          <div></div>
          <div></div>
        </WorkPhoto>
        <LittlePhoto>
          <div>
            <div>Free resources</div>
            <div>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the dat, going forward
            </div>
          </div>
          <div>
            <div>Multi-purpose</div>
            <div>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the dat, going forward
            </div>
          </div>
          <div>
            <div>Fully responsive</div>
            <div>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the dat, going forward
            </div>
          </div>
        </LittlePhoto>
      </CenterContainer>

      <NewsContainer>
        <Compute src={ComputeIMG}></Compute>
        <Content>
          <ContentBlock>
            <div>Our Skills</div>
            <div>Make it Stand Out.</div>
            <ContentItem>
              <div>
                <div>IIIustration</div>
                <div>90%</div>
              </div>
              <ContentLine>
                <div></div>
              </ContentLine>
            </ContentItem>
            <ContentItem>
              <div>
                <div>Web design</div>
                <div>90%</div>
              </div>
              <ContentLine>
                <div></div>
              </ContentLine>
            </ContentItem>
            <ContentItem>
              <div>
                <div>IIIustration</div>
                <div>90%</div>
              </div>
              <ContentLine>
                <div></div>
              </ContentLine>
            </ContentItem>
          </ContentBlock>
        </Content>
      </NewsContainer>

      <SecondContent>
        <LeftContent>
          <div>Fun Facts</div>
          <div>
            A focused team with a <div>specialized skill set</div>
          </div>
          <div>
            <div>LEARN MORE</div>
          </div>
        </LeftContent>
        <RightContentContainer>
          <RightContent>
            <div>210</div>
            <div>
              <div>Success Projects</div>
              <div>Bring to the table win-win survival </div>
              <div>strategies to ensure proactive domination.</div>
              <div> At the end of the dat, going forward</div>
            </div>
          </RightContent>
          <RightContent>
            <div>270</div>
            <div>
              <div>Features Projects</div>
              <div>Bring to the table win-win survival </div>
              <div>strategies to ensure proactive domination.</div>
              <div> At the end of the dat, going forward</div>
            </div>
          </RightContent>
        </RightContentContainer>
      </SecondContent>

      <EmployeesContainer>
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
      </EmployeesContainer>
    </>
  );
};

export default FirstIndex;
