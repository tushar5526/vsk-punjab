import React from 'react'
import QuestionWithIframe from '../../components/QuestionWIthIframe'
import IframeHeading from './IframeHeading'
import SectionHeader from './SectionHeader'

const Section4 = () => {
    return (
        <section>
            <SectionHeader label="Mentoring" />
            <div className='section4IframeContainer mb'>
                {Array(6).fill(1).map(() => (
                    <div className='section4Iframe '>
                        <QuestionWithIframe
                            questionId={84}
                            width="100%"
                            height="100%"
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                ))}
            </div>
            <div className='section4headeing mb'>
                <IframeHeading label='District Performance' />
            </div>
            <div className='section4Container'>
                <div>
                    <QuestionWithIframe
                        questionId={98}
                        width="100%"
                        height="100%"
                        handleLoadCounter={() => { }}
                    />

                </div>
                <div>
                    <QuestionWithIframe
                        questionId={98}
                        width="100%"
                        height="100%"
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
                        handleLoadCounter={() => { }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Section4