import { Component } from 'react'
import "./index.css"
import QuestionWithIframe from '../../../components/QuestionWIthIframe';
import { connect } from 'react-redux';


interface Props {
    year: any
    date_range: any
}
export class Screen4 extends Component<Props, any> {

    constructor(props: Props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className='IframeScreen'>
                    <QuestionWithIframe
                        questionId={57}
                        width="100%"
                        type={1}
                        height="100%"
                        params={{
                            year: this.props.year,
                            date_range: this.props.date_range
                        }}
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

export default connect(mapStateToProps)(Screen4)