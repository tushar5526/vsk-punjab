import { notification } from 'antd'
import { Component } from 'react'
import MapComponent from '../../../components/MapComponent/MapComponent'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import API_SERVICE from '../../../services/api-service'
import IframeHeading from '../../ControlledTabs/Tabs/utils/IframeHeading'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import StudentAttendanceIcon from "../../../assets/pjb/SectionHeader/student_attendance.png"
import "./index.css"

interface State {
    config: any
    markerData: any
}
interface Props {

}


export class Screen1 extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            config: null,
            markerData: null
        }
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


    componentDidMount(): void {
        if (this.state.config?.length) {
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
            .then((configJson) => {
                this.setState({ config: configJson })
            });

        this.getMarkerData()
    }
    render() {
        return (
            <>
                <SectionHeader Icon={StudentAttendanceIcon} label={"Student Attendance"} />
                <div className='Screen1'>
                    <div className='Screen1__Container'>
                        <div className="Screen1__Container1 mb">
                            <div className="Screen1__Container--iframe">
                                <QuestionWithIframe
                                    questionId={253}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className="Screen1__Container--iframe">
                                <QuestionWithIframe
                                    questionId={282}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                        </div>
                        <IframeHeading greenVariant label='District Performance' />
                        <div className="Screen1__Container1 mb">
                            <div className='Screen1__Container1_DistrictPerformance'>
                                <IframeHeading greenVariant label='Top District' />
                                <div className='Screen1__Container1_DistrictPerformance--iframe mb'>
                                    <QuestionWithIframe
                                        questionId={304}
                                        width="100%"
                                        height="100%"
                                        nonDownloadable={true}
                                        handleLoadCounter={() => { }}
                                    />
                                </div>
                                <div className='Screen1__Container1_DistrictPerformance--iframe'>
                                    <QuestionWithIframe
                                        questionId={305}
                                        width="100%"
                                        height="100%"
                                        nonDownloadable={true}
                                        handleLoadCounter={() => { }}
                                    />
                                </div>
                            </div>
                            <div className='Screen1__Container1_DistrictPerformance'>
                                <IframeHeading greenVariant label='Bottom District' />
                                <div className='Screen1__Container1_DistrictPerformance--iframe mb'>
                                    <QuestionWithIframe
                                        questionId={306}
                                        width="100%"
                                        height="100%"
                                        nonDownloadable={true}
                                        handleLoadCounter={() => { }}
                                    />
                                </div>
                                <div className='Screen1__Container1_DistrictPerformance--iframe'>
                                    <QuestionWithIframe
                                        questionId={307}
                                        width="100%"
                                        height="100%"
                                        nonDownloadable={true}
                                        handleLoadCounter={() => { }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Screen1__Container'>
                        <IframeHeading greenVariant label='Month-wise Trend of Average Student Attendance' />
                        <div className="Screen1__Container3">
                            <QuestionWithIframe
                                questionId={303}
                                width="100%"
                                height="100%"
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>
                    <div className='Screen1__Container'>
                        <IframeHeading greenVariant label='Student Attendance - Map View' />

                        <div className="Screen__Container1--map">
                            <MapComponent config={this.state.config} markers={this.state.markerData} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Screen1