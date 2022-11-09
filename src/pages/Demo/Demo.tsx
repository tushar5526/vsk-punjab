import { notification } from 'antd';
import { Component } from 'react'
import API_SERVICE from '../../services/api-service';
import "./Demo.css"
import DemoHeader from './DemoHeader';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';






export class Demo extends Component {
    constructor(props: any) {
        super(props);
    }

    state = {
        markerData: null
    }



    componentDidMount(): void {
        this.getMarkerData()
    }
    formatMarkerData = (data: any) => {
        const formattedData = data
            // .filter((item: any, index: number) => index <= 20000)
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
        this.setState({
            markerData: {
                shouldClusterMarkers: true,
                postions: formattedData,
            }
        });
    };
    getMarkerData = async () => {
        let data: any = [];
        let dataWithHexCode = [];
        const params: any = {
            district: "SIRMAUR",
        };
        try {
            data = await API_SERVICE.getDistrictMarkerData(params);
            const assessmentData =
                await API_SERVICE.getStudentAssesmentDistrict1Grade48({
                    assessment_type_v2: "SA2",
                });

            dataWithHexCode = data.data.rows.map((item: any) => {
                const filteredItem = assessmentData.data.rows.find((row: any) => {
                    return row.district === item.district;
                });
                if (filteredItem) {
                    return {
                        ...item,
                        color: filteredItem?.HexCodes,
                        ay: filteredItem?.academic_year,
                        at: filteredItem?.assessment_type_v2,
                        peravg: filteredItem?.per_AverageScore,
                    };
                }
                return {
                    ...item,
                    color: "purple",
                };
            });
        } catch (error) {
            notification.error({
                placement: "bottomRight",
                message: API_SERVICE.handleErrors(error)
            });
            this.formatMarkerData(dataWithHexCode);

        }
    }

    render() {
        return (
            <>
                <DemoHeader />
                <Section1 />
                <Section2 getMarkerData={this.getMarkerData} markerData={this.state.markerData} />
                <Section3 />
                <Section4 />
                <Section5 />
            </>

        )
    }
}

export default Demo