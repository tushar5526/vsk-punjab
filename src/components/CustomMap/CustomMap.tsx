import MapComponent from "../MapComponent/MapComponent"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

const CustomMap = () => {
    const [config, setConfig] = useState<any>(null)
    const [markers, setMarkers] = useState<any>(null)
    const formatMarkerData = (data: any) => {
        const formattedData = data
            .map((item: any) => {
                return {
                    icon: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png",
                    color: "purple",
                    tooltipCSS: {
                        color: "#ff0000",
                    },
                    tooltip: `this is ${item?.district}`,
                    position: [item?.lat, item?.long],
                    ...item,
                };
            });
        setMarkers({
            shouldClusterMarkers: true,
            postions: formattedData,
        });
    };

    const getMarkerData = async () => {

        try {
            const { data } = await axios.get("https://run.mocky.io/v3/3bf28ec7-4e43-485d-ac0c-32d82c128977")
            console.log(JSON.parse(data), "res")
        } catch (error) {
            console.log(error, "erro")
        }
        // formatMarkerData(districts)
    }


    useEffect(() => {
        getMarkerData()
    }, [])
    return (

        <MapComponent config={null} markers={markers} />
    )
}

export default CustomMap