import Map from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoiZWxhZGFsZmFzc2EiLCJhIjoiY2xkMDRmaGY2MTM3aDNxcWx3dHYzZjl3eiJ9.AM2H8oWyhMuLgC6Rqnp84g";

const MapContainer = () => {
  return (
    <Map
      initialViewState={{
        longitude: 34.776272,
        latitude: 32.0756,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={TOKEN}
    />
  );
};

export default MapContainer;
