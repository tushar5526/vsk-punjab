import MapComponent from "../MapComponent/MapComponent"
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { getEncryptedStringForMIS, getSchoolListForMapWithLatLong } from "../../pages/VedioWall/utils";
import { setLoadingForMapRender } from "../../redux/VedioWall/actions";
import { Spin, notification } from 'antd';
import "./index.css"
import Spinner from "../Spinner/Spinner";

const CustomMap = ({ mis_year, setLoading, loading }: any) => {
    const [markers, setMarkers] = useState<any>(null)
    const formatMarkerData = (data: any, encryptedAcademicYear: any) => {
        const formattedData = data
            .map((item: any) => {
                return {
                    icon: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png",
                    color: "purple",
                    tooltipCSS: {
                        color: "#ff0000",
                    },
                    encryptedAcademicYear,
                    position: [item?.lat, item?.lng],
                    ...item,
                };
            })
        setMarkers({
            shouldClusterMarkers: true,
            postions: formattedData,
        });

        // redux
        setLoading(false)
    };


    const getMarkerData = async () => {
        try {

            const encryptedAcademicYear = await getEncryptedStringForMIS(mis_year)
            const schoolList = await getSchoolListForMapWithLatLong(encryptedAcademicYear)
            if (schoolList) formatMarkerData(schoolList, encryptedAcademicYear)

        } catch (error) {
            notification.error({
                placement: "topRight",
                message: "Something went wrong"
            })
        }
    }


    useEffect(() => {
        getMarkerData()
    }, [mis_year])
    return loading ? (
        <div className="MapToolTipContainer">
            <Spinner />
        </div>
    ) : (
        <MapComponent config={null} markers={markers} />
    )
}

const mapStateToProps = ({ vedio_wall: { mis_year, loading } }: any) => ({
    mis_year,
    loading
})

const mapDispatchToProps = (dispatch: any) => ({
    setLoading: (e: any) => dispatch(setLoadingForMapRender(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomMap)