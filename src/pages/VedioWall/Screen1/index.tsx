import { FC } from 'react';
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import CustomMap from '../../../components/CustomMap/CustomMap'
import { connect } from 'react-redux'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import Filters from '../Filters/Filters'
import map from "../../../assets/pjb/SectionHeader/map.png"
import studentAttendance from "../../../assets/pjb/SectionHeader/student_attendance.png"

interface Props {
    year: any
    date_range: any
    loading: any
    withFilter?: any
}


const Screen1: FC<Props> = ({ year, date_range, withFilter = true }) => {



    return (
        <>
            {withFilter && <Filters />}
            <div className='Screen1'>
                <div className='screen1NewIframe'>
                    <div className="HeaderContainer__padding">
                        <SectionHeader Icon={studentAttendance} label="Student Attendance" />
                    </div>

                    <QuestionWithIframe
                        questionId={54}
                        width="100%"
                        height="96%"
                        type={1}
                        params={{ year, date_range }}
                    />
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


const mapStateToProps = ({ vedio_wall: { year, date_range, loading } }: any) => ({
    year,
    date_range,
    loading
})

export default connect(mapStateToProps)(Screen1)