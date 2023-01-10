import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import MapBound from "./MapBound";
import "./Map.css";
import MapOverlays from "./MapOverlays";
import red_marker from "../../assets/Map_marker_red.svg";
import green_marker from "../../assets/Map_marker_green.svg";
import blue_marker from "../../assets/Map_marker_blue.svg";
import purple_marker from "../../assets/Map_marker_purple.svg";
import yellow_marker from "../../assets/Map_marker_yellow.svg";
import ToolTip from "./ToolTip/ToolTip";

export default function MapComponent({ config, markers }) {
  // const center = config?.markers?.postions[0]?.position || [28.7041, 77.1025];
  const center = [30.8244732639336, 75.173516308009];
  const byGeoJson = config?.bounds?.byGeoJson?.length;
  const byBbox = config?.bounds?.byBbox?.length;

  const tempBounds = [
    [76.715049743652401, 31.588310241699446],
    [76.716567993164119, 31.585119247436467],
  ];

  // if (!config || (config && !config.legend)) return <div>Loading..</div>;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection:
          config &&
          config.legend &&
          config.legend.position &&
          config.legend.position.split("-")[0] === "bottom"
            ? "column"
            : "column-reverse",
      }}
    >
      <MapContainer
        bounds={tempBounds}
        className="markercluster-map"
        center={center}
        zoom={8}
        maxZoom={18}
        style={{ width: "100%", height: "120vh" }}
        // zoomControl={config.map.zoomControl}
        // scrollWheelZoom={config.map.scrollWheelZoom}
        // dragging={config.map.dragging}
        // doubleClickZoom={config.map.doubleClickZoom}
      >
        {!byGeoJson && (
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        )}

        {(byGeoJson || byBbox) && <MapBound bounds={config.bounds} />}
        {/* <MapBound /> */}
        {byGeoJson && <MapOverlays overlays={config.overlays} />}
        {!byGeoJson && //
          (markers?.shouldClusterMarkers ? (
            <MarkerClusterGroup style={{ height: "5000px" }}>
              {markers?.postions.map((item, idx) => {
                let markerColor = blue_marker;
                const iconPerson = new L.Icon({
                  iconUrl: markerColor,
                  iconRetinaUrl: markerColor,
                  iconSize: new L.Point(90, 60),
                  // onclick: getToolTipData,
                  // eventHandlers: { eventHandlers },
                  // className: "leaflet-div-icon",
                });
                return (
                  <ToolTip
                    key={`${idx}`}
                    iconPerson={iconPerson}
                    position={item.position}
                  />
                );
              })}
              {/* </div> */}
            </MarkerClusterGroup>
          ) : (
            //
            <div>
              {markers?.postions.map((item, idx) => {
                let markerColor = blue_marker;
                if (item.color === "red") {
                  markerColor = red_marker;
                } else if (item.color === "yellow") {
                  markerColor = yellow_marker;
                } else if (item.color === "blue") {
                  markerColor = blue_marker;
                } else if (item.color === "green") {
                  markerColor = green_marker;
                } else if (item.color === "purple") {
                  markerColor = purple_marker;
                }
                const iconPerson = new L.Icon({
                  // iconUrl: new URL(`${item.icon}`),
                  // iconRetinaUrl: new URL(`${item.icon}`),
                  iconUrl: markerColor,
                  iconRetinaUrl: markerColor,
                  iconSize: new L.Point(20, 30),
                  // onclick: getToolTipData,
                  // eventHandlers: { eventHandlers },
                  // className: "leaflet-div-icon",
                });
                return (
                  <ToolTip
                    key={idx}
                    iconPerson={iconPerson}
                    position={item.position}
                  />
                );
              })}
            </div>
          ))}
      </MapContainer>
    </div>
  );
}
