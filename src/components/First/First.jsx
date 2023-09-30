import styled from "styled-components";
import "../First/first.css";
const First = () => {
  return (
    <div className="main-first">
      <Community>Join our community</Community>
      <Guarantee>30-day, hassle-free money back guarantee</Guarantee>
      <FirstDescription>
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills.
      </FirstDescription>
    </div>
  );
};

export default First;

const Community = styled.h1`
  color: hsl(179, 62%, 43%);
  font-size: 25px;
  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

const Guarantee = styled.p`
  color: hsl(71, 73%, 54%);
  font-size: 20px;
  width: 80%;
  font-weight: 700;
  @media screen and (min-width: 1440px) {
    font-size: 28px;
    width: 100%;
  }
`;

const FirstDescription = styled.p`
  color: hsl(218, 22%, 67%);
  line-height: 30px;
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
