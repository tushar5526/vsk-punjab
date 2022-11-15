import React from 'react'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import IframeHeading from '../../ControlledTabs/Tabs/utils/IframeHeading'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import Filters from '../Filters/Filters'
import "./index.css"

const Screen2: React.FC = () => {
    return (
        <>
            <Filters />
            <SectionHeader label='' label2={"Mid-Day Meal"} />
            <div className='Screen2'>
                <div className="Screen2__Container">
                    <div className="Screen2__Container1 mb_m">
                        <div className="Screen2__Container1--iframe">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="Screen2__Container1--iframe">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="Screen2__Container1--iframe">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>
                    <IframeHeading greenVariant label='District Performace' />
                    <div className="Screen2__Container2">
                        <div className="Screen2__Container2--iframe">
                            <QuestionWithIframe
                                questionId={152}
                                width="100%"
                                height="100%"
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="Screen2__Container2--iframe">
                            <QuestionWithIframe
                                questionId={152}
                                width="100%"
                                height="100%"
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="Screen2__Container2--iframe">
                            <QuestionWithIframe
                                questionId={152}
                                width="100%"
                                height="100%"
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>
                </div>
                <div className="Screen2__Container">
                    <IframeHeading greenVariant label='Month-wise Trend of Students Receiving MDM' />

                </div>
            </div>
        </>
    )
}

export default Screen2