import warning from "../icons/warning.svg";

const CancelledLayer = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "1",
        height: "100%",
        backgroundColor: "red",
        width: "20%",
        textAlign: "center",
      }}
    >
      <img src={warning} style={{ width: "100%" }} alt="warning"></img>
      <div>Stop is cancelled</div>
    </div>
  );
};
export default CancelledLayer;
