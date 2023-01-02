import React, { useState } from 'react'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import Filters from '../Filters/Filters'

const Screen2: React.FC = () => {

    return (
        <>
            <Filters />
            <div className='IframeScreen'>
                <QuestionWithIframe
                    questionId={55}
                    width="100%"
                    type={1}
                    height="100%"
                    handleLoadCounter={() => { }}
                />
            </div>
        </>
    )
}

export default Screen2