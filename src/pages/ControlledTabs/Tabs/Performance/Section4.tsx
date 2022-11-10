import React from 'react'
import QuestionWithIframe from '../../../../components/QuestionWIthIframe'
import IframeHeading from '../utils/IframeHeading'
import SectionHeader from '../utils/SectionHeader'

interface Props {
    filters: {
        district: string;
        block: string;
        cluster: string
    }
}
const Section4 = ({ filters }: Props) => {
    return (
        <section>
            <SectionHeader label="Mentoring" />
            <div className='section4IframeContainer mb'>
                {Array(6).fill(1).map((_, idx) => (
                    <div key={idx + "Section4"} className='section4Iframe '>
                        <QuestionWithIframe
                            questionId={84}
                            width="100%"
                            height="100%"
                            params={{ ...filters }}
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                ))}
            </div>
            <div className='section4headeing mb'>
                <IframeHeading label='District Performance' />
            </div>
            <div className='section4Container mb'>
                <div>
                    <QuestionWithIframe
                        questionId={98}
                        width="100%"
                        height="100%"
                        params={{ ...filters }}
                        handleLoadCounter={() => { }}
                    />

                </div>
                <div>
                    <QuestionWithIframe
                        questionId={98}
                        width="100%"
                        height="100%"
                        params={{ ...filters }}

                        handleLoadCounter={() => { }}
                    />
                </div>
            </div>
            <div className='section4headeing mb'>
                <IframeHeading label='Monthly Cadre-wise % School Visits Completed against the target' />
            </div>
            <div className='section4BarGraph'>
                <div>
                    <QuestionWithIframe
                        questionId={111}
                        width="100%"
                        height="100%"
                        params={{ ...filters }}

                        handleLoadCounter={() => { }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Section4