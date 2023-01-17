import { Component } from 'react'
import "./index.css"
import QuestionWithIframe from '../../../components/QuestionWIthIframe';
import { connect } from 'react-redux';


interface Props {
    year: any
    single_date: any
}
export class Screen4 extends Component<Props, any> {

    constructor(props: Props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className='IframeScreen4'>
                    <QuestionWithIframe
                        questionId={67}
                        width="100%"
                        type={1}
                        height="100%"
                        params={{
                            year: this.props.year,
                            single_date: this.props.single_date
                        }}
                        handleLoadCounter={() => { }}
                    />
                </div>
            </>
        )
    }
}

const mapStateToProps = ({ vedio_wall: { year, single_date } }: any) => ({
    year,
    single_date,
})

export default connect(mapStateToProps)(Screen4)