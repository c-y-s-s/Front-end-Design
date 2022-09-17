import styled from "styled-components";
import BigNewYork from "../img/background.jpg";

const CenterPhotoContainer = styled.div``;
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

const CenterPhoto = () => {
  return (
    <>
      <CenterPhotoContainer>
        <Photo>
          <h2>About Us</h2>
          <div>We help startups and digital agencies launch</div>
          <div>projects on time</div>
        </Photo>
      </CenterPhotoContainer>
    </>
  );
};

export default CenterPhoto;
