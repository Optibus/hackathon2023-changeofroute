import MapContainer from "./MapContainer";
import CancelledLayer from "./CancelledLayer";

const CancelledStop = () => {
  return (
    <div style={{ height: "50%", position: "relative" }}>
      <CancelledLayer></CancelledLayer>
      <MapContainer></MapContainer>
    </div>
  );
};

export default CancelledStop;
