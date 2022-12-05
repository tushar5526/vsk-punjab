import React, { useState } from "react";
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

const default_toolTipData = {
  Attendance: "NA",
  Enrolment: "NA",
  PTR: "NA",
  CWSN: "NA",
};

export default function MapComponent({ config, markers }) {
  const center = config?.markers?.postions[0]?.position || [28.7041, 77.1025];
  const byGeoJson = config?.bounds?.byGeoJson?.length;
  const byBbox = config?.bounds?.byBbox?.length;
  const [toolTipData, setToolTipData] = useState(default_toolTipData);

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
                  <Marker
                    key={`maker${idx}`}
                    position={item?.position}
                    icon={iconPerson}
                  >
                    <Popup
                      className="tooltip-popup"
                      onOpen={() => {
                        // instruction written here will be executed -
                        // - while the tooltip is opened
                      }}
                    >
                      <div>{item.tooltip}</div>
                    </Popup>
                  </Marker>
                );
              })}
              {/* </div> */}
            </MarkerClusterGroup>
          ) : (
            //
            <div>
              {markers?.postions.map((item) => {
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
                  <Marker position={item.position} icon={iconPerson}>
                    <Popup
                      onOpen={() => {
                        // getToolTipData(item.district, item.block, item.school);
                      }}
                    >
                      {toolTipData}
                    </Popup>
                  </Marker>
                );
              })}
            </div>
          ))}
      </MapContainer>
      {/* {config.legend.display && (
        <div
          style={{
            display: config.legend.display ? "flex" : "none",
            width: "100%",
            marginTop: "10px",
            // flexDirection: "column",
            justifyContent:
              config.legend.position.split("-")[1] === "right"
                ? "flex-end"
                : "flex-start",
          }}
        >
          {config.legend.labels.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "50px",
                    height: 25,
                    backgroundColor: item.color,
                    padding: "0px",
                  }}
                />
                <label style={{ ...item, color: "black", fontSize: "30px" }}>
                  {item.label}
                </label>
              </div>
            );
          })}
        </div>
      )} */}
    </div>
  );
}
