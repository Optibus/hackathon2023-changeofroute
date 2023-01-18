import React from "react";
import styled from "styled-components";
import warning from "../icons/warning2.svg";

const Wrapper = styled("div")({
  backgroundColor: "#FFF06A",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "34px",
  // width: "100%",
  position: "absolute",
  top: "2%",
});

const StyledDate = styled("div")({
  fontSize: "30px",
  marginBottom: "34px",
  fontWeight: 700,
  maxWidth: "18vw"
});

const StyledText = styled("p")({
  fontSize: "40px",
  fontWeight: 700,
  margin: 0,
});

const LinesWrapper = styled("div")({
  display: "flex",
  marginTop: "30px",
});

const StopsWrapper = styled("div")({
  display: "flex",
  marginTop: "30px",
});

const StyledLineBox = styled("div")<{ color: string }>(({ color }) => ({
  backgroundColor: color,
  borderRadius: "75px",
  fontSize: "100%",
  fontWeight: 500,
  marginLeft: "1rem",
  marginRight: "1rem",
  height: "140px",
  width: "140px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));

interface IWarningBoxHorizontalProps {
  stops: Array<{
    name: string;
    color: string;
  }>;
}

const WarningBoxHorizontal: React.FC<IWarningBoxHorizontalProps> = ({ stops }) => (
  <Wrapper>
    <img src={warning} alt="Cancelled stop" width="180" />
    <StyledDate>From: 17.12.2022 - 05.01.2023</StyledDate>
    <StyledText>
      The upcoming stop is out of service.
    </StyledText>
    <StopsWrapper>
      {stops.map((stop, i) => (
        <StyledLineBox key={i} color={stop.color}>
          {stop.name}
        </StyledLineBox>
      ))}
    </StopsWrapper>
   
  </Wrapper>
);

export default WarningBoxHorizontal;
