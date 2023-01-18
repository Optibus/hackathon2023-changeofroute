import styled from "styled-components";
import logo from "../icons/logo.svg";

const TemplateWrapper = styled("div")({
  position: "absolute",
  bottom: 0,
  left: 0,
  backgroundColor: "#001231",
  padding: "2% 0",
  textAlign: "center",
  color: "#fff",
  width: "100%",
  fontWeight: "bold",
  fontSize: "18px",
});
const CreatedByOptibus = styled("div")({
  textAlign: "center",
  color: "#fff",
  width: "100%",
  fontSize: "17px",
  fontWeight: "normal",
});
const TemplateFooter = () => {
  return (
    <TemplateWrapper>
      <img
        src={logo}
        alt="Current stop"
        width="10%"
        style={{
          left: 0,
          position: "absolute",
          top: 0,
          transform: "translate(20%,-50%)",
        }}
      />
      09 366 6400 | Auckland Transport General Private Bag 92250, Auckland 1142
      <CreatedByOptibus>
        Created by Optibus
      </CreatedByOptibus>
    </TemplateWrapper>
  );
};
export default TemplateFooter;
