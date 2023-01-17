import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import Filters from '../Filters/Filters'
import { connect } from 'react-redux'
import API_SERVICE from '../../../services/api-service'
import { parseStringPromise, parseString } from 'xml2js';
import { useState, FC, useEffect } from 'react';
import { notification } from 'antd'
import { getAcademicYearList, parseYearListForMetabase } from '../utils'


interface Props {
    year: any
    single_date: any
}

const Screen2: FC<Props> = ({ year, single_date }) => {





    return (
        <>
            <Filters />
            <div className='IframeScreen'>
                <QuestionWithIframe
                    questionId={65}
                    width="100%"
                    type={1}
                    params={{ year, single_date }}
                    height="100%"
                    handleLoadCounter={() => { }}
                />
            </div>
        </>
    )
}


const mapStateToProps = ({ vedio_wall: { year, single_date } }: any) => ({
    year,
    single_date,
})

export default connect(mapStateToProps)(Screen2)