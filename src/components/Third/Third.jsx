import "../Third/third.css";
import styled from "styled-components";

const Third = () => {
  return (
    <div className="main-third">
      <Question>Why us</Question>
      <ThirdDescription>
        Tutorials by industry experts Peer & expert code review Coding exercises
        Access to our GitHub repos Community forum Flashcard decks New videos
        every week
      </ThirdDescription>
    </div>
  );
};

export default Third;

const Question = styled.h1`
  color: white;
  font-size: 25px;
  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

const ThirdDescription = styled.p`
  color: white;
  width: 70%;
  font-size: 18px;
  line-height: 28px;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    width: 90%;
    line-height: 32px;
  }
`;
