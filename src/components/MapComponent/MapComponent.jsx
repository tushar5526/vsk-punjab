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
import { Spin } from "antd";

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

  if (!config || (config && !config.legend)) return <div>Loading..</div>;

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
          config.legend.position.split("-")[0] == "bottom"
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
        zoomControl={config.map.zoomControl}
        scrollWheelZoom={config.map.scrollWheelZoom}
        dragging={config.map.dragging}
        doubleClickZoom={config.map.doubleClickZoom}
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
              {markers?.postions.map((item) => {
                let markerColor = blue_marker;
                // // if (type === 3) {
                // // } else {
                // //   if (item.color == "red") {
                // //     markerColor = red_marker;
                // //   } else if (item.color == "yellow") {
                // //     markerColor = yellow_marker;
                // //   } else if (item.color == "blue") {
                // //     markerColor = blue_marker;
                // //   } else if (item.color == "green") {
                // //     markerColor = green_marker;
                // //   } else if (item.color == "purple") {
                // //     markerColor = purple_marker;
                // //   } else if (
                // //     item.color == "#259EA6" ||
                // //     item.color == "#259ea6"
                // //   ) {
                // //     markerColor = district_marker;
                // //   } else if (
                // //     item.color == "#FF0000" ||
                // //     item.color == "#ff0000"
                // //   ) {
                // //     markerColor = red_marker;
                // //   } else {
                // //     markerColor = yellow_marker;
                // //   }
                // }
                const iconPerson = new L.Icon({
                  // iconUrl: new URL(`${item.icon}`),
                  // iconRetinaUrl: new URL(`${item.icon}`),
                  iconUrl: markerColor,
                  iconRetinaUrl: markerColor,
                  iconSize: new L.Point(90, 60),
                  // onclick: getToolTipData,
                  // eventHandlers: { eventHandlers },
                  // className: "leaflet-div-icon",
                });
                return (
                  <Marker position={item?.position} icon={iconPerson}>
                    <Popup
                      className="tooltip-popup"
                      onOpen={() => {
                        // getToolTipData(
                        //   item?.district,
                        //   item?.block,
                        //   item?.school,
                        //   item?.ay,
                        //   item?.at
                        // );
                      }}
                    >
                      {toolTipData?.type == 2 ? (
                        <div>
                          <p>
                            {toolTipData?.district.value ||
                              toolTipData?.block.value ||
                              toolTipData?.school.value ||
                              "NA"}
                          </p>
                          <br />
                          <span>
                            <span> {toolTipData?.SA1?.label}</span> :{" "}
                            {toolTipData?.SA1?.value || "NA"}
                          </span>
                          <br />
                          <span>
                            <span> {toolTipData?.SA2?.label}</span> :{" "}
                            {toolTipData?.SA2?.value || "NA"}
                          </span>
                          <br />
                          <span>
                            <span
                              style={{
                                fontWeight: "bold",
                                textDecoration: "underline",
                              }}
                            >
                              {toolTipData?.GradeWiseavgResult?.label}
                            </span>
                            <br />
                            {toolTipData?.GradeWiseavgResult?.grade1?.label}
                          </span>{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade1?.value ||
                              "NA"}
                          </span>{" "}
                          |{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade2?.label}
                          </span>{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade2?.value ||
                              "NA"}
                          </span>{" "}
                          | <br />
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade3?.label}
                          </span>{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade3?.value ||
                              "NA"}
                          </span>
                          <br />
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade4?.label}
                          </span>{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade4?.value ||
                              "NA"}
                          </span>{" "}
                          |{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade5?.label}
                          </span>
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade5?.value ||
                              "NA"}
                          </span>
                        </div>
                      ) : toolTipData?.type == 1 ? (
                        <>
                          <div>
                            <span>
                              {toolTipData?.district?.value ||
                                toolTipData?.block?.value ||
                                toolTipData?.school?.value}
                            </span>
                            <br />
                            <span>
                              <span>
                                {toolTipData?.totalStudentEnrolled?.label}
                              </span>{" "}
                              :{" "}
                              {toolTipData?.totalStudentEnrolled?.value || "NA"}
                            </span>
                            <br />
                            <span>
                              <span>{toolTipData?.SA1?.label} </span> :{" "}
                              {" " + toolTipData?.SA1?.value || "NA"}
                            </span>
                            <br />
                            <span>
                              <span>{toolTipData?.SA2?.label} </span> :{" "}
                              {" " + toolTipData?.SA2?.value || "NA"}
                            </span>
                            <br />
                            <span
                              style={{
                                textDecoration: "underline",
                                fontWeight: "bold",
                              }}
                            >
                              {toolTipData?.gradeWiseAvgResult.label}
                            </span>
                            <br />
                            <span>
                              {toolTipData?.gradeWiseAvgResult?.grade1?.label} :{" "}
                              {toolTipData?.gradeWiseAvgResult?.grade1?.value ||
                                "NA"}
                            </span>{" "}
                            |{" "}
                            <span>
                              {toolTipData?.gradeWiseAvgResult?.grade2?.label}:{" "}
                              {toolTipData?.gradeWiseAvgResult?.grade2?.value ||
                                "NA"}
                            </span>{" "}
                            |{" "}
                            <span>
                              {toolTipData?.gradeWiseAvgResult?.grade3?.label}:{" "}
                              {toolTipData?.gradeWiseAvgResult?.grade3?.value ||
                                "NA"}
                            </span>
                            <br />
                            <span>
                              <span
                                style={{
                                  textDecoration: "underline",
                                  fontWeight: "bold",
                                }}
                              >
                                {toolTipData?.nipunStudent?.label}
                              </span>{" "}
                              :{" "}
                              <span>
                                {toolTipData?.nipunStudent?.value || "NA"}
                              </span>
                            </span>
                            <br />
                            <span
                              style={{
                                textDecoration: "underline",
                                fontWeight: "bold",
                              }}
                            >
                              {toolTipData?.gradeWiseNipunStudent.label}
                            </span>
                            <br />
                            <span>
                              {
                                toolTipData?.gradeWiseNipunStudent?.grade1
                                  ?.label
                              }{" "}
                              :{" "}
                              {toolTipData?.gradeWiseNipunStudent?.grade1
                                ?.value || "NA"}
                            </span>{" "}
                            |{" "}
                            <span>
                              {
                                toolTipData?.gradeWiseNipunStudent?.grade2
                                  ?.label
                              }{" "}
                              :{" "}
                              {toolTipData?.gradeWiseNipunStudent?.grade2
                                ?.value || "NA"}
                            </span>{" "}
                            |{" "}
                            <span>
                              {
                                toolTipData?.gradeWiseNipunStudent?.grade3
                                  ?.label
                              }{" "}
                              :{" "}
                              {toolTipData?.gradeWiseNipunStudent?.grade3
                                ?.value || "NA"}
                            </span>
                            <p></p>
                          </div>
                        </>
                      ) : toolTipData?.type == 3 ? (
                        <>
                          <div>
                            {item.district || item.block || item.school}
                          </div>
                          <div>
                            Attendance: {toolTipData?.Attendance?.value || "NA"}
                          </div>
                          <div>CWSN: {toolTipData?.CWSN?.value || "NA"}</div>
                          <div>
                            Enrollment: {toolTipData?.Enrolment?.value || "NA"}
                          </div>
                          <div>PTR: {toolTipData?.PTR?.value || "NA"}</div>
                        </>
                      ) : (
                        <>
                          {/* <div>
                            {item.district || item.block || item.school}
                          </div>
                          <div>
                            Attendence: {toolTipData.Attendance || "NA"}
                          </div>
                          <div>CWSN: {toolTipData.CWSN || "NA"}</div>
                          <div>Enrollment: {toolTipData.Enrolment || "NA"}</div>
                          <div>PTR: {toolTipData.PTR || "NA"}</div> */}
                          <Spin style={{ margin: "auto" }} />
                        </>
                      )}
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
                if (item.color == "red") {
                  markerColor = red_marker;
                } else if (item.color == "yellow") {
                  markerColor = yellow_marker;
                } else if (item.color == "blue") {
                  markerColor = blue_marker;
                } else if (item.color == "green") {
                  markerColor = green_marker;
                } else if (item.color == "purple") {
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
              config.legend.position.split("-")[1] == "right"
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
