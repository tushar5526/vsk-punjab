import React, { useState, useEffect } from 'react'
import MapComponent from '../../components/MapComponent/MapComponent'
import IframeHeading from './IframeHeading'

interface Props {
    getMarkerData: Function
    markerData: any
}
const Section2 = (props: Props) => {
    const [config, setConfig] = useState([]);
    const getConfig = () => {
        if (config.length) {
            return;
        }

        fetch("/educationDashboardConfig.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (configJson) {
                setConfig(configJson);
            });
    };

    useEffect(() => {
        getConfig();
        props.getMarkerData("Districts")
    }, [])
    return (
        <div className='section2 mb'>
            <div className='section2Heading mb'>
                <IframeHeading label='Student Attendance - Map View' />
            </div>
            <div className="section2MapContainer">
                <div className='section2Map'>
                    <MapComponent config={config} markers={props.markerData} />
                </div>
            </div>
        </div>
    )
}

export default Section2