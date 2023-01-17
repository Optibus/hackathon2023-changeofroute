import styled from "styled-components";

const StyledCube = styled.div`
  height: 50px;
  width: 50px;
  background-color: #58ced0;
  transform: rotate(45deg);
  border-radius: 10px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bolder;
`;

const WrapperWithDiagonalLine = styled.div`
  width: calc(80px * 1.41);
  border-bottom: 3px solid red;
  transform: rotate(135deg);
  transform-origin: left;
`;

interface ICancelledRouteCubeProps {
  text: string;
  color: string;
}

const CancelledRouteCubeProps = ({ text, color }: ICancelledRouteCubeProps) => {
  return (
    <WrapperWithDiagonalLine>
      <StyledCube color={color}> {text} </StyledCube>
    </WrapperWithDiagonalLine>
  );
};

export default CancelledRouteCubeProps;
