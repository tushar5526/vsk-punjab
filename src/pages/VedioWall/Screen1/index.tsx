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
                    <div className='screen1NewIframe'>
                        <QuestionWithIframe
                            questionId={54}
                            width="100%"
                            type={1}
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
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