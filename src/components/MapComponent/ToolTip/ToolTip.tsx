import { Spin } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

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
        <Marker
            position={position}
            icon={iconPerson}
        >
            <Popup className="tooltip-popup" >
                <div>{toolTip || <Spin />}</div>
            </Popup>
        </Marker>
    )
}

export default ToolTip