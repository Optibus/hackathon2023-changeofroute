import styled from "styled-components";

const StyledCube = styled.div`
  height: 50px;
  width: 50px;
  background-color: #58ced0;
  border-radius: 10px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bolder;
  position: relative;
`;

const WrapperWithDiagonalLine = styled.div`
  width: 50px;
  top: 50%;
  border-bottom: 3px solid red;
  transform: rotate(140deg) translateY(-50%);
  position: absolute;
`;

 const SetyledCubeText = styled.div`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translate(-50%,-50%);
 `;

interface ICancelledRouteCubeProps {
  text: string;
  color: string;
}

const CancelledRouteCubeProps = ({ text, color }: ICancelledRouteCubeProps) => {
  return (
   <StyledCube>
     <SetyledCubeText>{text}</SetyledCubeText>
    <WrapperWithDiagonalLine color={color}></WrapperWithDiagonalLine>
   </StyledCube>
  );
};

export default CancelledRouteCubeProps;
