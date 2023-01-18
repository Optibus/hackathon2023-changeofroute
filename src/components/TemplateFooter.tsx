import styled from "styled-components";

const TemplateWrapper = styled("div")({
  position: "absolute",
  bottom: 0,
  left: 0,
  backgroundColor: "#001231",
  padding: "3% 0",
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
      09 366 6400 | Auckland Transport General Private Bag 92250, Auckland 1142
      <CreatedByOptibus>
        Created by Optibus
      </CreatedByOptibus>
    </TemplateWrapper>
  );
};
export default TemplateFooter;
