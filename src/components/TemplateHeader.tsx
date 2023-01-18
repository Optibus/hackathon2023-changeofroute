import styled from "styled-components";

const StyledTemplateHeader = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  textAlign: "center",
  backgroundImage:
    "repeating-linear-gradient(-45deg, #FFF06A 0, #FFF06A 20px, #000 20px, #000 40px)",
  //  "repeating-linear-gradient(-45deg, #FFF06A 0, #FFF06A 3%, #000 3%, #000 5%, #FFF06A 5%, #FFF06A 8%, #000 8%, #000 10%, #FFF06A 20%, #FFF06A 25%, #000 80%, #000 90%, #FFF06A 90%, #FFF06A 100%)",
  width: "100%",
  zIndex: "10",
  padding: "2% 0",
});
const StyledTemplateHeaderText = styled("div")({
  position: "absolute",
  top: 0,
  textAlign: "center",
  backgroundColor: "#FFF06A",
  left: "50%",
  height: "100%",
  padding: "0 6%",
  transform: "translateX(-50%)",
});
const StyledInnerSpan = styled("span")({
  top: "50%",
  display: "block",
  position: "relative",
  transform: "translateY(-50%)",
});
const TemplateHeader = () => {
  return (
    <StyledTemplateHeader>
      <StyledTemplateHeaderText>
        <StyledInnerSpan>Planned service changes</StyledInnerSpan>
      </StyledTemplateHeaderText>
    </StyledTemplateHeader>
  );
};

export default TemplateHeader;
