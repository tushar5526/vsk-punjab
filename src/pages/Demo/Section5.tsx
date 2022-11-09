import React from 'react'
import QuestionWithIframe from '../../components/QuestionWIthIframe'
import GreayFooter from './GreayFooter'
import IframeHeading from './IframeHeading'
import SectionHeader from './SectionHeader'

interface Props {
    filters: {
        district: string;
        block: string;
        cluster: string
    }
}
const Section5 = ({ filters }: Props) => {
    return (
        <section className='section5'>
            <SectionHeader label="Infrastructure" />
            <div className='section5Container'>
                <div className='section5Container1'>
                    <div className="section5Iframe">
                        <QuestionWithIframe
                            questionId={84}
                            width="100%"
                            height="100%"
                            params={{ ...filters }}
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                    <div className="section5Iframe">
                        <QuestionWithIframe
                            questionId={84}
                            params={{ ...filters }}
                            width="100%"
                            height="100%"
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                    <div className="section5Iframe">
                        <QuestionWithIframe
                            questionId={84}
                            params={{ ...filters }}
                            width="100%"
                            height="100%"
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
                <div className='section5Container1'>
                    <div className="section5Iframe">
                        <QuestionWithIframe
                            questionId={84}
                            width="100%"
                            params={{ ...filters }}
                            height="100%"
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                    <div className="section5Iframe">
                        <QuestionWithIframe
                            questionId={84}
                            width="100%"
                            params={{ ...filters }}
                            height="100%"
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                    <div className="section5Iframe">
                        <QuestionWithIframe
                            questionId={84}
                            params={{ ...filters }}
                            width="100%"
                            height="100%"
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
            </div>
            <div className='section5Heading mb'>
                <IframeHeading label='District Performance' />
            </div>
            <div className="section5Part2 mb">
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
                        handleLoadCounter={() => { }}
                    />
                </div>
                <div>
                    <QuestionWithIframe
                        questionId={98}
                        width="100%"
                        params={{ ...filters }}
                        height="100%"
                        handleLoadCounter={() => { }}
                    />
                </div>
            </div>
            <SectionHeader label="Finance and Civil Works" />
            <div className='section5Part3'>
                <div>
                    <div className='section5Part3Heading mb'>
                        <IframeHeading label='District Performance' />
                    </div>
                    <div className='section5Part3IframeContainer'>
                        <div className="section5Iframe">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                params={{ ...filters }}
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="section5Iframe">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                params={{ ...filters }}
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="section5Iframe">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                params={{ ...filters }}
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='section5Part3Heading mb'>
                        <IframeHeading label='District Performance' />
                    </div>
                    <div className='section5Part3IframeContainer'>
                        <div className="section5Iframe">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                params={{ ...filters }}
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="section5Iframe">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                params={{ ...filters }}
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="section5Iframe">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                params={{ ...filters }}
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='section6 mb'>
                <div className='section5Part3Heading mb'>
                    <IframeHeading label='District Performance' />
                </div>
                <div className='section6IframeContainer mb'>
                    <div>
                        <QuestionWithIframe
                            questionId={98}
                            width="100%"
                            params={{ ...filters }}
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                    <div>
                        <QuestionWithIframe
                            questionId={98}
                            width="100%"
                            params={{ ...filters }}
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
            </div>
            <GreayFooter />
        </section>
    )
}

export default Section5