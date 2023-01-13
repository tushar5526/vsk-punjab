import { Component } from 'react'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import CustomMap from '../../../components/CustomMap/CustomMap'
import { connect } from 'react-redux'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import Filters from '../Filters/Filters'
import map from "../../../assets/pjb/SectionHeader/map.png"
import infrastructure from "../../../assets/pjb/SectionHeader/infrastructure.png"
interface State {
    config: any
    markerData: any
}
interface Props {
    year: any
    date_range: any
    loading: any
}


export class Screen1 extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            config: null,
            markerData: null,
        }
    }


    render() {
        return (
            <>
                <Filters />

                <div className='Screen1'>
                    <div className='screen1NewIframe'>
                        <div className="HeaderContainer__padding">
                            <SectionHeader Icon={infrastructure} label="Infrastructure" />
                        </div>

                        <QuestionWithIframe
                            questionId={54}
                            width="100%"
                            height="100%"
                            type={1}
                            params={{
                                year: this.props.year,
                                date_range: this.props.date_range
                            }}
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
}


const mapStateToProps = ({ vedio_wall: { year, date_range, loading } }: any) => ({
    year,
    date_range,
    loading
})

export default connect(mapStateToProps)(Screen1)