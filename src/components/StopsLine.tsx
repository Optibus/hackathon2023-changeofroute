import React from "react";
import styled from "styled-components";
import warning from "../icons/warning.svg";
import up from "../icons/up.svg";
import { Stop } from "../types";

const Wrapper = styled("div")({
  display: "flex",
  position: "relative",
  paddingTop: "8px",
});

const StyledStop = styled("div")<{ color: string }>(({ color }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderTop: `solid 5px ${color}`,
  paddingLeft: "2rem",
  paddingRight: "2rem",
}));

const StyledDot = styled("div")<{ color: string; isCancelled: boolean }>(
  ({ color, isCancelled }) => ({
    border: `solid 3px ${isCancelled ? "gray" : color}`,
    height: 15,
    width: 15,
    borderRadius: "100%",
    background: "white",
    marginTop: -13,
  })
);

const CrossContainer = styled("div")({
  position: "absolute",
  top: 0,
  fontSize: "17px",
});

interface IStopsLineProps {
  color: string;
  currentStopId: string;
  stops: Stop[];
}

const StopsLine: React.FC<IStopsLineProps> = ({
  color,
  currentStopId,
  stops,
}) => (
  <Wrapper>
    {stops.map(({ id, isCancelled = false, name }) => (
      <StyledStop key={id} color={color}>
        {isCancelled ? <CrossContainer>❌</CrossContainer> : null}
        <StyledDot color={color} isCancelled={isCancelled} />
        {name}
        {isCancelled ? (
          <img src={warning} alt="Cancelled stop" width="20" />
        ) : null}
        {id === currentStopId ? (
          <>
            <img src={up} alt="Current stop" width="20" />
            <div>You are here</div>
          </>
        ) : null}
      </StyledStop>
    ))}
  </Wrapper>
);

export default StopsLine;
