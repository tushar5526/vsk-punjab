import { Component } from 'react'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import { connect } from 'react-redux'



interface Props {
    year: any
    single_date: any
}
export class Screen3 extends Component<Props, any> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className='IframeScreen3'>
                    <QuestionWithIframe
                        questionId={66}
                        width="100%"
                        type={1}
                        params={{
                            year: this.props.year,
                            single_date: this.props.single_date
                        }}
                        height="100%"
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


export default connect(mapStateToProps)(Screen3)