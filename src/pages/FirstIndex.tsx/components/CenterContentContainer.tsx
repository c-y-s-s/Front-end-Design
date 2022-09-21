import React from "react";
import styled from "styled-components";
import { device } from "../../../components/device";
import Work01 from "../img/work1.jpg";
import Work02 from "../img/work2.jpg";
import Coffee from "../img/coffee.jpg";

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
  margin-top: 5rem;
  flex-wrap: wrap;
  justify-content: center;
  div {
    width: 650px;
    height: 630px;
    margin: 1rem 1rem;
    background-size: cover;
    border-radius: 5px;
  }
  div:nth-child(1) {
    background-image: url("${Work01}");
    margin: 1rem 1rem;
  }
  div:nth-child(2) {
    background-image: url("${Work02}");
    margin: 1rem 0rem;
  }
  @media ${device.laptopL} {
    margin-top: 4rem;
    div {
      width: 450px;
      height: 450px;
      flex-wrap: nowrap;
    }
  }

  @media ${device.laptop} {
    div {
      width: 350px;
      height: 350px;
    }
  }
  @media ${device.tablet} {
    div {
      margin: 0.7rem 0.3rem;
      justify-content: center;
    }
  }
  @media ${device.mobileL} {
    flex-wrap: nowrap;
    div {
      width: 175px;
      height: 175px;
    }
  }
  @media ${device.mobileS} {
    flex-wrap: nowrap;
    div {
      width: 150px;
      height: 150px;
    }
  }
`;
const LittlePhoto = styled.div`
  display: flex;
  margin-top: 7rem;
  flex-wrap: wrap;
  justify-content: center;
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
  }

  @media ${device.laptopL} {
    > div {
      width: 300px;
      height: 450px;
      margin: 0 0.5rem;
    }
  }

  @media ${device.laptop} {
    margin-top: 4rem;
    > div {
      width: 230px;
      height: 350px;
      margin: 0 0.66rem;
      padding: 0 2rem 3rem 2rem;
    }
  }
  @media ${device.tablet} {
    > div {
      margin: 0.35rem 0.45rem;
    }
  }
  @media ${device.mobileL} {
    > div {
      width: 300px;
      height: 300px;
      margin: 1.5rem 0;
    }
  }

  @media ${device.mobileL} {
    justify-content: center;
  }
`;
const LittlePhotoItem = styled.div`
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.03) 50%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url("${Coffee}");
  background-size: cover;
  background-position: 55% 50%;

  div:nth-child(1) {
    font-size: 1.45rem;
    @media ${device.laptop} {
      font-size: 1.35rem;
    }
  }
  div:nth-child(2) {
    margin-top: 2rem;
    text-align: center;
    font-weight: 200;
    @media ${device.laptop} {
      font-size: 13px;
    }
  }
`;
const CenterContentContainer = () => {
  return (
    <>
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
          <LittlePhotoItem>
            <div>Free resources</div>
            <div>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the dat, going forward
            </div>
          </LittlePhotoItem>
          <LittlePhotoItem>
            <div>Multi-purpose</div>
            <div>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the dat, going forward
            </div>
          </LittlePhotoItem>
          <LittlePhotoItem>
            <div>Fully responsive</div>
            <div>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the dat, going forward
            </div>
          </LittlePhotoItem>
        </LittlePhoto>
      </CenterContainer>
    </>
  );
};

export default CenterContentContainer;
