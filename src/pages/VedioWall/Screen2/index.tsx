import React from 'react'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import IframeHeading from '../../ControlledTabs/Tabs/utils/IframeHeading'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import Filters from '../Filters/Filters'
import "./index.css"
import midDayMeal from "../../../assets/pjb/SectionHeader/mid_day_meal.png"

const Screen2: React.FC = () => {
    return (
        <>
            {/* <Filters />
            <SectionHeader Icon={midDayMeal} label='Mid-Day Meal' />
            <div className='Screen2'>
                <div className="Screen2__Container">
                    <div className="Screen2__Container1 mb">
                        <div className="Screen2__Container1--iframe">
                            <QuestionWithIframe
                                questionId={293}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="Screen2__Container1--iframe">
                            <QuestionWithIframe
                                questionId={294}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="Screen2__Container1--iframe">
                            <QuestionWithIframe
                                questionId={295}
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
                                questionId={297}
                                width="100%"
                                height="100%"
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="Screen2__Container2--iframe">
                            <QuestionWithIframe
                                questionId={298}
                                width="100%"
                                height="100%"
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="Screen2__Container2--iframe">
                            <QuestionWithIframe
                                questionId={299}
                                width="100%"
                                height="100%"
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>
                </div>
                <div className="Screen2__Container">
                    <IframeHeading greenVariant label='Month-wise Trend of Students Receiving MDM' />
                    <div className="Screen2__Container3--iframe">
                        <QuestionWithIframe
                            questionId={296}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div> */}
            {/* </div> */}
            <div className='IframeScreen2'>
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