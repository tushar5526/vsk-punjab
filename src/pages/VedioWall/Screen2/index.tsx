import React from 'react'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import Filters from '../Filters/Filters'
import { connect } from 'react-redux'


interface Props {
    year: any
    date_range: any
}
const Screen2: React.FC<Props> = ({ year, date_range }) => {

    return (
        <>
            <Filters />
            <div className='IframeScreen'>
                <QuestionWithIframe
                    questionId={65}
                    width="100%"
                    type={1}
                    params={{ year, date_range }}
                    height="100%"
                    handleLoadCounter={() => { }}
                />
            </div>
        </>
    )
}


const mapStateToProps = ({ vedio_wall: { year, date_range } }: any) => ({
    year,
    date_range,
})

export default connect(mapStateToProps)(Screen2)