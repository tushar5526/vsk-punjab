import { Component } from 'react'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import { connect } from 'react-redux'



interface Props {
    year: any
    date_range: any
}
export class Screen3 extends Component<Props, any> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className='IframeScreen'>
                    <QuestionWithIframe
                        questionId={56}
                        width="100%"
                        type={1}
                        params={{
                            year: this.props.year,
                            date_range: this.props.date_range
                        }}
                        height="100%"
                        handleLoadCounter={() => { }}
                    />
                </div>
            </>
        )
    }
}


const mapStateToProps = ({ vedio_wall: { year, date_range } }: any) => ({
    year,
    date_range,
})


export default connect(mapStateToProps)(Screen3)