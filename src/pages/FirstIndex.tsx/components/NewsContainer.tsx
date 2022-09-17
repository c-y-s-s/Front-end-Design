import React from "react";
import styled from "styled-components";
import { device } from "../../../components/device";
import ComputeIMG from "../img/compute.jpg";
const News = styled.div`
  display: flex;
  margin-top: 9rem;
  @media ${device.tablet} {
    flex-wrap: wrap;
  }
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
  @media ${device.tablet} {
    min-width: 100%;
  }
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
    @media ${device.tablet} {
      width: 85%;
    }
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
const NewsContainer = () => {
  return (
    <div>
      <News>
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
      </News>
    </div>
  );
};

export default NewsContainer;
