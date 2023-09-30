import styled from "styled-components";
import "../Second/second.css";
const Second = () => {
  return (
    <div className="main-second">
      <Subscription>Monthly Subscription</Subscription>
      <PriseDiv>
        <Dollar>$29</Dollar>
        <Monthly>per month</Monthly>
      </PriseDiv>
      <FullAccess>Full access for less than $1 a day</FullAccess>
      <SignUp>Sig nUp</SignUp>
    </div>
  );
};

export default Second;

const Subscription = styled.h1`
  color: white;
  font-size: 18px;
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

const PriseDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Dollar = styled.strong`
  color: white;
  font-size: 32px;
  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;
const Monthly = styled.span`
  color: hsl(204, 43%, 93%);
  font-size: 15px;
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

const FullAccess = styled.p`
  color: white;
  font-size: 18px;
  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

const SignUp = styled.button`
  margin-top: 20px;
  padding: 18px;
  background-color: hsl(71, 73%, 54%);
  color: white;
  font-family: inherit;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  &:hover {
    background-color: white;
    color: hsl(71, 73%, 54%);
  }
  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;
