import { Component } from 'react'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import CustomMap from '../../../components/CustomMap/CustomMap'
import { connect } from 'react-redux'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import { GoLocation } from "react-icons/go"
import Filters from '../Filters/Filters'
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
                        <QuestionWithIframe
                            questionId={54}
                            width="100%"
                            height="100%"
                            type={1}
                            params={{ ...this.props }}
                        />
                    </div>
                    <div className='Screen1__Container'>
                        <SectionHeader Icon={GoLocation} label="Map View" />
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