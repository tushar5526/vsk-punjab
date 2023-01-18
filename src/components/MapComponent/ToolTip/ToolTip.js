import axios from "axios";
import React, { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { useEffect } from "react";

import "./ToolTip.css";
import {
  getEncryptedStringForMIS,
  getToolTip,
} from "../../../pages/VedioWall/utils";
import { Spin } from "antd";
import { connect } from "react-redux";

const ToolTip = (props) => {
  const [toolTip, setToolTip] = useState({
    block: null,
    district: null,
    is_attendance_marked: null,
    school_name: null,
    total_students_enrolled: null,
    total_students_marked_present: null,
    loaded: false,
  });

  const getToolTipData = async () => {
    const encryptedSchoolId = await getEncryptedStringForMIS(props.school_id);
    const encryptedDate = await getEncryptedStringForMIS(props.single_date);
    const res = await getToolTip(
      props.encryptedAcademicYear,
      encryptedSchoolId,
      encryptedDate
    );
    if (res) setToolTip({ ...res, loaded: true });
  };

  return (
    <Marker position={props.position} icon={props.iconPerson}>
      <Popup
        // onOpen={() => {
        //   getToolTipData();
        // }}
        className="tooltip-popup"
      >
        {toolTip.loaded ? (
          <div className="toolTipStyle">
            {toolTip.school_name && (
              <div>
                <span>School Name : </span>
                <span>{toolTip.school_name}</span>
              </div>
            )}
            {toolTip.block && (
              <div>
                <span>Block : </span>
                <span>{toolTip.block}</span>
              </div>
            )}
            {toolTip.district && (
              <div>
                <span>District : </span>
                <span>{toolTip.district}</span>
              </div>
            )}
            {toolTip.total_students_enrolled && (
              <div>
                <span>Total number of students enrolled : </span>
                <span>{toolTip.total_students_enrolled}</span>
              </div>
            )}
            {toolTip.total_students_marked_present && (
              <div>
                <span>Number of students marked present : </span>
                <span>{toolTip.total_students_marked_present}</span>
              </div>
            )}
          </div>
        ) : (
          <Spin />
        )}
      </Popup>
    </Marker>
  );
};

const mapStateToProps = ({ vedio_wall: { single_date } }) => {
  const dateArr = String(single_date).split("-");

  return {
    single_date: `${dateArr[0]}-${dateArr[2]}-${dateArr[1]}`,
  };
};
export default connect(mapStateToProps)(ToolTip);
