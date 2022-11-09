import QuestionWithIframe from '../../components/QuestionWIthIframe'
import IframeHeading from './IframeHeading'
import SectionHeader from './SectionHeader'
import { useEffect } from 'react';

interface Props {
    filters: {
        district: string;
        block: string;
        cluster: string
    }
}

const Section1 = ({ filters }: Props) => {
    return (
        <>
            <SectionHeader label={"Student Attendance"} />
            <section className='section1 mb'>
                <div className='demoSection1'>
                    <div className='demoSection1__spanContainer'>
                        <div className='demoSection1__spanContainer1 mb '>
                            <div className='demoSection1__span--iframe'>
                                <QuestionWithIframe
                                    questionId={84}
                                    width="100%"
                                    params={{ ...filters }}
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className='demoSection1__span--iframe'>
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

                        <div className='demoSection1__spanContainer2'>
                            <div className='demoSection1__spanContainer2--heading'>
                                <IframeHeading label='District Performace' />
                            </div>
                            <div className='spanContainer2'>
                                <div className='spanContainer2__item'>
                                    <QuestionWithIframe
                                        questionId={97}
                                        params={{ ...filters }}
                                        width="100%"
                                        height="100%"
                                        handleLoadCounter={() => { }}
                                    />
                                </div>
                                <div className='spanContainer2__item'>
                                    <QuestionWithIframe
                                        questionId={98}
                                        width="100%"
                                        height="100%"
                                        params={{ ...filters }}
                                        handleLoadCounter={() => { }}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='demoSection2__spanContainer'>
                        <div className="spanContainerHeading">
                            <IframeHeading label='Month-wise Trend' />
                        </div>
                        <div className='spanContainerItem'>
                            <QuestionWithIframe
                                handleLoadCounter={() => { }}
                                questionId={59}
                                width="100%"
                                height="100%"
                                params={{ ...filters }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1