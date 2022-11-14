import { Component } from 'react'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import "./index.css"
import IframeHeading from '../../ControlledTabs/Tabs/utils/IframeHeading';
import QuestionWithIframe from '../../../components/QuestionWIthIframe';

export class Screen4 extends Component {
    render() {
        return (
            <div className='Section4'>
                <div className="Section4Child">
                    <SectionHeader label='' label2='Mentoring' />

                    <div className="Section4ChildCardsContainer1 mb">
                        <div className='Section4ChildCardsContainerIframe mb'>
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className='Section4ChildCardsContainerIframe mb'>
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className='Section4ChildCardsContainerIframe mb'>
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className='Section4ChildCardsContainerIframe'>
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className='Section4ChildCardsContainerIframe'>
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className='Section4ChildCardsContainerIframe'>
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>
                    <IframeHeading greenVariant label='Monthly Cadre-wise % School Visits Completed against the target' />
                    <div className="Section4Graph">
                        <QuestionWithIframe
                            questionId={152}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
                <div className="Section4Child">
                    <IframeHeading greenVariant label='Parameter-wise Status' />
                    <div className="Section4RightIframeContainer">
                        <div className="Section4RightIframeContaineriframe Section4RightIframeContaineriframeCommon mb">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>

                        <div className="Section4RightIframeContaineriframe Section4RightIframeContaineriframeCommon mb">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="Section4RightIframeContaineriframeBig Section4RightIframeContaineriframeCommon">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Screen4