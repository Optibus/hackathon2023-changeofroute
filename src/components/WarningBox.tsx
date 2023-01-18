import React from "react";
import styled from "styled-components";
import warning from "../icons/warning2.svg";

const Wrapper = styled("div")({
  backgroundColor: "#FFF06A",
  borderRadius: "0 2vw 2vw 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "34px",
  width: "31.765%",
  position: "absolute",
  top: "10%",
});

const StyledDate = styled("div")({
  fontSize: "30px",
  marginBottom: "34px",
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

const StyledLineBox = styled("div")<{ color: string }>(({ color }) => ({
  backgroundColor: color,
  borderRadius: "5px",
  fontSize: "50px",
  fontWeight: 700,
  marginLeft: "1rem",
  marginRight: "1rem",
  height: "140px",
  width: "140px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

interface IWarningBoxProps {
  lines: Array<{
    code: string;
    color: string;
  }>;
}

const WarningBox: React.FC<IWarningBoxProps> = ({ lines }) => (
  <Wrapper>
    <StyledDate>17.12.2022-05.01.2023</StyledDate>
    <img src={warning} alt="Cancelled stop" width="180" />
    <StyledText>
      This stop is out of service for the following lines:
    </StyledText>
    <LinesWrapper>
      {lines.map((line, i) => (
        <StyledLineBox key={i} color={line.color}>
          {line.code}
        </StyledLineBox>
      ))}
    </LinesWrapper>
  </Wrapper>
);

export default WarningBox;
