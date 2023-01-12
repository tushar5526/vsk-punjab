import axios from 'axios';
import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useEffect } from 'react';

import "./ToolTip.css"
import { getEncryptedStringForMIS, getToolTip } from '../../../pages/VedioWall/utils';
import { Spin } from 'antd';

interface Props {
    position: any
    iconPerson: any
    encryptedAcademicYear: any
    school_id: any
}

interface ToolTip {
    block: any
    district: any
    is_attendance_marked: any
    school_name: any
    total_students_enrolled: any
    total_students_marked_present: any,
    loaded: any
}
const ToolTip: React.FC<Props> = (props) => {

    const [toolTip, setToolTip] = useState<ToolTip>({
        block: null,
        district: null,
        is_attendance_marked: null,
        school_name: null,
        total_students_enrolled: null,
        total_students_marked_present: null,
        loaded: false
    })

    const getToolTipData = async () => {
        const encryptedSchoolId = await getEncryptedStringForMIS(props.school_id)
        const res = await getToolTip(props.encryptedAcademicYear, encryptedSchoolId)
        if (res) setToolTip({ ...res, loaded: true })
    }


    useEffect(() => {
        getToolTipData()
    }, [])
    return (
        <div >
            <Marker
                position={props.position}
                icon={props.iconPerson}
            >
                <Popup className="tooltip-popup" >
                    {toolTip.loaded ? (
                        <div className='toolTipStyle'>
                            {toolTip.school_name && (
                                <div>
                                    <span>School Name{" "}:{" "}</span><span>{toolTip.school_name}</span>
                                </div>
                            )}
                            {toolTip.block && (
                                <div>
                                    <span>Block{" "}:{" "}</span><span>{toolTip.block}</span>
                                </div>
                            )}
                            {toolTip.total_students_enrolled && (
                                <div>
                                    <span>Total number of students enrolled{" "}:{" "}</span><span>{toolTip.total_students_enrolled}</span>
                                </div>
                            )}
                            {toolTip.total_students_marked_present && (
                                <div>
                                    <span>Number of students marked present{" "}:{" "}</span><span>{toolTip.total_students_marked_present}</span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Spin />
                    )}
                </Popup>
            </Marker>
        </div>
    )
}

export default ToolTip