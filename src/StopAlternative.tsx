import styled from "styled-components";
import { StopDescription, WalkingDistance } from "./types";
import man from "./icons/man-walking.svg";
import arrowRight from "./icons/arrow-right.svg";
import line from "./icons/line-divider.svg";
import stopPoint from "./icons/stop-point.svg";
import miniStop from "./icons/mini-stop.svg";
import stopAlternative from "./icons/bus-stop-alternative.svg";

const StyledDiv = styled.div`
  border-radius: 18px;
  border: 6px ${({ color }) => color} solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 56px;
`;

const StyledColorLabel = styled.div`
  border-radius: 5px;
  position: absolute;
  padding: 0.2vw 1vw;
  font-weight: bold;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${({ color }) => color};
`;

const MinuteNumber = styled.span`
  font-size: 50px;
  line-height: 50px;
`;

const MinuteText = styled.span`
  font-size: 20px;
  line-height: 20px;
`;

const StyledImage = styled.img``;

const StopInfoIcon = styled.img`
  padding-right: 10px;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const StopInfoItemWrapper = styled.div`
  font-family: Poppins;
  font-size: 17px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #656565;
  display: flex;
  margin: 10px;
`;
const DividerLine = styled.img`
  margin-top: 20px;
  margin-bottom: 10px;
`;
interface StopAlternativeProps {
  stop: StopDescription;
  walkingDistance: WalkingDistance;
  color?: string;
}

const MinuteArrowWrraper = styled.div`
  display: flex;
  width: 170px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MinuteArrow = ({ minutes }: { minutes: number }) => {
  return (
    <MinuteArrowWrraper>
      <MinuteNumber>{minutes}</MinuteNumber>
      <MinuteText>Minutes</MinuteText>
      <StyledImage src={arrowRight} alt="to" width="100%" />
    </MinuteArrowWrraper>
  );
};

const StopInfoItem = ({ icon, text }: { icon: string; text: string }) => (
  <StopInfoItemWrapper>
    <StopInfoIcon src={icon} alt="stop-info" />
    {text}
  </StopInfoItemWrapper>
);

const StopAlternative = ({
  stop,
  walkingDistance,
  color = "red",
}: StopAlternativeProps) => {
  return (
    <StyledDiv color={color}>
      <StyledColorLabel color={color}>Route 21</StyledColorLabel>
      <div>
        <MainSection>
          <StyledImage src={man} alt="go" />
          <MinuteArrow minutes={walkingDistance.minutes} />
          <img src={stopAlternative} alt="stop" />
        </MainSection>
        <DividerLine src={line} alt="divider" />
        <StopInfoItem icon={stopPoint} text={stop?.name} />
        <StopInfoItem icon={miniStop} text={stop?.id} />
      </div>
    </StyledDiv>
  );
};

export default StopAlternative;
