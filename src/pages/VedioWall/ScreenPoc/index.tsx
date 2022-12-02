import { Component } from 'react'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import StudentAttendanceIcon from "../../../assets/pjb/SectionHeader/student_attendance.png"
import "./index.css"
import CardsPoc1 from './CardsPoc1/CardsPoc1'

interface State {
    config: any
    markerData: any
}
interface Props {
    type: number
}


class ScreenPoc extends Component<Props, State> {
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
                <SectionHeader Icon={StudentAttendanceIcon} label={"POC 1"} />
                <div>
                    <CardsPoc1 type={1} fill={4} />
                    {/* <CardsPoc1 type={1} fill={4} />
                    <CardsPoc1 type={1} fill={4} /> */}
                </div>
            </>
        )
    }
}

export default ScreenPoc