import MapComponent from "../MapComponent/MapComponent"
import { useState } from 'react';
import { useEffect } from 'react';
import districts from "./district";

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
        // un comment this implementation while to fetch data from api
        // try { 
        //     const { data: { rows } } = await API_SERVICE.getDistrictMarkerData({
        //         district: "SIRMAUR",
        //     })

        //     if (rows) {
        //         formatMarkerData(rows)
        //     }

        // } catch (error) {
        //     API_SERVICE.handleErrors(error)
        // }
        formatMarkerData(districts)
    }


    useEffect(() => {
        getMarkerData()
    }, [])
    return (

        <MapComponent config={null} markers={markers} />
    )
}

export default CustomMap