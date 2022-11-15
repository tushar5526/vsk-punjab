import MapComponent from "../MapComponent/MapComponent"
import { useState } from 'react';
import { useEffect } from 'react';
import API_SERVICE from '../../services/api-service';

const CustomMap = () => {
    const [config, setConfig] = useState<any>(null)
    const [markers, setMarkers] = useState<any>(null)
    const formatMarkerData = (data: any) => {
        const formattedData = data
            .map((item: any, index: number) => {
                return {
                    icon: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png",
                    color: item?.color ? item.color : "purple",
                    tooltipCSS: {
                        color: "#ff0000",
                    },
                    tooltip: "This is the marker tooltip",
                    position: [item.latitude, item.longitude],
                    district: item?.district,
                    block: item?.block,
                    school: item?.school_name,
                    ...item,
                };
            });
        setMarkers({
            shouldClusterMarkers: true,
            postions: formattedData,
        });
    };

    const getDistrictMarkerData = async () => {
        try {
            const { data: { rows } } = await API_SERVICE.getDistrictMarkerData({
                district: "SIRMAUR",
            })

            if (rows) {
                formatMarkerData(rows)
            }
        } catch (error) {
            API_SERVICE.handleErrors(error)
        }
    }

    const getConfig = () => {
        if (config) {
            return;
        }

        fetch("/educationDashboardConfig.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((configJson) => {
                setConfig(configJson);
                console.log(configJson, "config")
            });
    };

    useEffect(() => {
        getDistrictMarkerData()
        getConfig()
    }, [])
    return (
        <div className="MyMap">
            <MapComponent config={null} markers={markers} />
        </div>
    )
}

export default CustomMap