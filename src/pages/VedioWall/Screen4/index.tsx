import { Component } from 'react'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import "./index.css"
import IframeHeading from '../../ControlledTabs/Tabs/utils/IframeHeading';
import QuestionWithIframe from '../../../components/QuestionWIthIframe';

import IframeWithImage from './IframeWithImage/IframeWithImage';

export class Screen4 extends Component {
    render() {
        return (
            <>
                <div className='Section4'>
                    <div className="Section4Child">
                        {/* Mentoring start  */}
                        <SectionHeader label='' label2='Mentoring' />

                        <div className="Section4ChildCardsContainer1 mb">
                            <div className='Section4ChildCardsContainerIframe mb'>
                                <QuestionWithIframe
                                    questionId={254}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className='Section4ChildCardsContainerIframe mb'>
                                <QuestionWithIframe
                                    questionId={259}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className='Section4ChildCardsContainerIframe  mb'>
                                <QuestionWithIframe
                                    questionId={261}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className='Section4ChildCardsContainerIframe'>
                                <QuestionWithIframe
                                    questionId={255}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className='Section4ChildCardsContainerIframe'>
                                <QuestionWithIframe
                                    questionId={260}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className='Section4ChildCardsContainerIframe'>
                                <QuestionWithIframe
                                    questionId={262}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                        </div>
                        {/* Mentoring end */}

                        <IframeHeading greenVariant label='Monthly Cadre-wise % School Visits Completed against the target' />
                        <div className="Section4Graph">
                            <QuestionWithIframe
                                questionId={263}
                                width="100%"
                                height="100%"
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>

                    <IframeWithImage />

                </div>
            </>
        )
    }
}

export default Screen4