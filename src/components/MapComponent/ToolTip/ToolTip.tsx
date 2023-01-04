import axios from 'axios';
import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useEffect } from 'react';

import "./ToolTip.css"

interface ToolTipProps {
    position: any
    iconPerson: any

}

interface toolTipResponse {
    data: {
        toolTip: string
    }
}
const ToolTip: React.FC<ToolTipProps> = ({ position, iconPerson }) => {

    const [toolTip, setToolTip] = useState<any>(null)

    const getToolTip = async () => {
        const { data: { toolTip } }: toolTipResponse = await axios.get(
            "https://run.mocky.io/v3/35beed80-86c9-4a66-8ecb-72cdc0c0e090"
        );
        setToolTip(toolTip)
    };

    useEffect(() => {
        getToolTip()
    }, [])
    return (
        <div onClick={() => console.log("hello")} >
            <Marker
                position={position}
                icon={iconPerson}
            >
                <Popup className="tooltip-popup" >
                    {toolTip && (
                        <div className='toolTipStyle'>
                            <div>
                                <span>School Name{" "}:{" "}</span><span>Government Sr. Secondary School Block</span>
                            </div>
                            <div>
                                <span>Block{" "}:{" "}</span><span>Ludhiana West</span>
                            </div>
                            <div>
                                <span>Total number of students enrolled{" "}:{" "}</span><span>90</span>
                            </div>

                            <div>
                                <span>Attendance marked{" "}:{" "}</span><span>Yes</span>
                            </div>
                            <div>
                                <span>Number of students marked present{" "}:{" "}</span><span>75</span>
                            </div>
                        </div>
                    )}
                </Popup>
            </Marker>
        </div>
    )
}

export default ToolTip