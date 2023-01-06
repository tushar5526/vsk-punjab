import { Component } from 'react'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import CustomMap from '../../../components/CustomMap/CustomMap'
import { connect } from 'react-redux'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import StudentAttendance from "../../../assets/pjb/SectionHeader/student_attendance.png"
import map from "../../../assets/pjb/SectionHeader/map.png"
interface State {
    config: any
    markerData: any
}
interface Props {
    year: any
    date_range: any
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
                <div className='Screen1'>

                    <div className='HeaderContainer'>
                        <div className='HeaderContainer__padding'>
                            <SectionHeader Icon={StudentAttendance} label="Student Attendance" />
                        </div>

                        <div className='screen1NewIframe'>
                            <QuestionWithIframe
                                questionId={54}
                                width="100%"
                                height="100%"
                                type={1}
                                params={{ ...this.props }}
                            />
                        </div>
                    </div>
                    <div className='Screen1__Container'>
                        <SectionHeader Icon={map} label="Map View" />
                        <div className="Screen__Container1--map">
                            <CustomMap />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = ({ vedio_wall: { year, date_range } }: any) => ({
    year,
    date_range,
})

export default connect(mapStateToProps)(Screen1)