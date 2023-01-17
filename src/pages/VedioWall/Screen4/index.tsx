import { Component, FC } from 'react';
import "./index.css"
import QuestionWithIframe from '../../../components/QuestionWIthIframe';
import { connect } from 'react-redux';
import CombinedFooter from '../../../components/CombinedFooter/CombinedFooter';


interface Props {
    year: any
    single_date: any
    widthFooter?: any

}
const Screen4: FC<Props> = ({ year, single_date, widthFooter = true }) => {

    return (
        <>
            <div className='IframeScreen4'>
                <QuestionWithIframe
                    questionId={67}
                    width="100%"
                    type={1}
                    height="100%"
                    params={{ year, single_date }}
                />
            </div>
            {widthFooter && <CombinedFooter />}

        </>
    )
}


const mapStateToProps = ({ vedio_wall: { year, single_date } }: any) => ({
    year,
    single_date,
})

export default connect(mapStateToProps)(Screen4)