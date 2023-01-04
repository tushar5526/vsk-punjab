import { Component } from 'react'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import IframeHeading from '../../ControlledTabs/Tabs/utils/IframeHeading'
import "./index.css"
import CustomMap from '../../../components/CustomMap/CustomMap'
import { connect } from 'react-redux'

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
                    <div className='screen1NewIframe'>
                        {/* <QuestionWithIframe
                            questionId={54}
                            width="100%"
                            type={1}
                            params={{ ...this.props }}
                            height="100%"
                            handleLoadCounter={() => { }}
                        /> */}
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


const mapStateToProps = ({ vedio_wall: { year, date_range } }: any) => ({
    year,
    date_range,
})

export default connect(mapStateToProps)(Screen1)