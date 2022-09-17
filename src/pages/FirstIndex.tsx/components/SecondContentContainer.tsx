import styled from "styled-components";
import { device } from "../../../components/device";
const SecondContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: #f7f7f7;
  padding: 3.5rem 0 0 0;
  min-height: 500px;
  @media ${device.laptop} {
    padding: 3.5rem 0 3.5rem 0;
    flex-wrap: wrap;
  }
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
    @media ${device.laptop} {
      margin: 3rem 0 0 0;
    }
    @media ${device.tablet} {
      justify-content: center;
    }
    div {
      width: 50%;
      border: 2px solid #9e9e9e;
      padding: 1rem;
      text-align: center;
      font-weight: 900;

      @media ${device.laptop} {
        width: 60%;
      }
    }
  }

  @media ${device.laptop} {
    padding: 0 0 0 2rem;
  }
  @media ${device.tablet} {
    text-align: center;
    padding: 0;
  }
`;

const RightContentContainer = styled.div`
  margin-left: 10rem;
  @media ${device.laptop} {
    margin-left: 4.5rem;
  }
  @media ${device.tablet} {
    margin: 0rem 0 0 0;
    padding: 0 1rem;
    margin-top: 1.5rem;
  }
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

const SecondContentContainer = () => {
  return (
    <>
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
    </>
  );
};

export default SecondContentContainer;
