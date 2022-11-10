import QuestionWithIframe from '../../components/QuestionWIthIframe'
import IframeHeading from './IframeHeading'
import SectionHeader from './SectionHeader'


interface Props {
    filters: {
        district: string;
        block: string;
        cluster: string
    }
}

const Section3 = ({ filters }: Props) => {
    return (
        <>
            <SectionHeader label={"Mid-Day Meal"} />
            <section className='section3 mb'>
                <div className='sectionContainer '>
                    <div className='sectionContainer1 mb'>
                        <div className='section3Iframe'>
                            <QuestionWithIframe
                                questionId={84}
                                params={{ ...filters }}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className='section3Iframe'>
                            <QuestionWithIframe
                                questionId={84}
                                params={{ ...filters }}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className='section3Iframe'>
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
                    <div className='sectionContainer2'>
                        <div className='sectionContainer1Header mb'>
                            <IframeHeading label='District Performance' />
                        </div>
                        <div className='sectionContainerChild1'>
                            <div className='section3Iframe section3Iframe2Height'>
                                <QuestionWithIframe
                                    questionId={98}
                                    width="100%"
                                    params={{ ...filters }}
                                    height="100%"
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className='section3Iframe section3Iframe2Height'>
                                <QuestionWithIframe
                                    questionId={98}
                                    width="100%"
                                    height="100%"
                                    params={{ ...filters }}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className='section3Iframe section3Iframe2Height'>
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
                <div className='sectionContainer'>
                    <div className='section3ContainerHeading mb'>
                        <IframeHeading label='Month-wise Trend' />
                    </div>
                    <div className='section3Graph'>
                        <QuestionWithIframe
                            handleLoadCounter={() => { }}
                            questionId={59}
                            width="100%"
                            params={{ ...filters }}
                            height="100%"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section3