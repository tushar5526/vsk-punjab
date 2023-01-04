import MapComponent from "../MapComponent/MapComponent"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

interface DistrictArray {
    data: {
        districts: [{
            area: number
            district: string
            lat: number
            long: number
        }]
    }
}

const CustomMap = () => {
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
            const { data: { districts } }: DistrictArray = await axios.get("https://run.mocky.io/v3/0291fc8f-10f7-4ff9-a207-4ca6cb1f6504")
            if (districts) {
                formatMarkerData(districts)
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getMarkerData()
    }, [])
    return (
        <MapComponent config={null} markers={markers} />
    )
}

export default CustomMap