import { Component } from 'react'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import IframeHeading from '../../ControlledTabs/Tabs/utils/IframeHeading'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import StudentAttendanceIcon from "../../../assets/pjb/SectionHeader/student_attendance.png"
import "./index.css"
import CustomMap from '../../../components/CustomMap/CustomMap'

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
                            <CustomMap />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Screen1