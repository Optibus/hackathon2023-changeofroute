// import MapContainer from "./MapContainer";
import StopsLine from "./StopsLine";
import WarningBoxHorizontal from "./WarningBoxHorizontal";
import TemplateHeader from "./TemplateHeader";
import TemplateFooter from "./TemplateFooter";
import styled from "styled-components";
import { Stop } from "../types";
import StopsLineStories from "./StopsLine.stories";


const TemplateWrapper = styled("div")({
  position: "absolute",
  top: 0,
  left: "0",
  width: "98vw",
  padding: "0 1vw",
  height: "138.594vw",
});
const StyledUserText = styled("div")({
  display: "table",
  textAlign: "center",
  fontSize: "1.5rem",
  margin: "5% 7%",
});

const myData = {
  color: "#0038ff",
  stops: [
    {
      id: "1",
      name: "Stop one",
      geometry: {
        type: "Point",
        coordinates: [],
      },
    },
    {
      id: "2",
      name: "Stop two",
      geometry: {
        type: "Point",
        coordinates: [],
      },
    },
    {
      id: "3",
      name: "Stop three",
      geometry: {
        type: "Point",
        coordinates: [],
      },
      isCancelled: true,
    },
    {
      id: "4",
      name: "Stop four",
      geometry: {
        type: "Point",
        coordinates: [],
      },
    },
  ],
  currentStopId: "2",
};

const TemplateTwo = () => {
  return (
    <TemplateWrapper>
      <TemplateHeader></TemplateHeader>
      {/* <MapContainer></MapContainer> */}
     
      <WarningBoxHorizontal
        stops={[
          { name: "Mozes @ Menachem Begin", color: "#E8A7FF"},
        ]}
      ></WarningBoxHorizontal>
      <StopsLine
       IStopsLineProps = {[ myData]}
      ></StopsLine>
      <StyledUserText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </StyledUserText>
     
   
      
      <TemplateFooter></TemplateFooter>
    </TemplateWrapper>
  );
};

export default TemplateTwo;
