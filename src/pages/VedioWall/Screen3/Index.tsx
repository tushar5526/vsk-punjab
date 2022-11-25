import { Component } from 'react'
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import IframeHeading from '../../ControlledTabs/Tabs/utils/IframeHeading'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import "./index.css"
import financeAndCivilWorks from "../../../assets/pjb/SectionHeader/finance_and_civil_works.png"
import infrastructure from "../../../assets/pjb/SectionHeader/infrastructure.png"
export class Screen3 extends Component {
    render() {
        return (
            <>
                <div className='Screen3'>
                    <div className="Screen3__Container1">
                        <SectionHeader Icon={financeAndCivilWorks} label='Finance and Civil Works' />
                        <div className='Screen3Part'>
                            <div className="Screen3__IframeContainer">
                                <IframeHeading greenVariant label='Finance' />

                                <div className="Screen3__IframeContainerChild">
                                    <div className='Screen3__IframeContainer2'>
                                        <div className="Screen3__Iframe--left mb_m">
                                            <QuestionWithIframe
                                                questionId={264}
                                                width="100%"
                                                height="100%"
                                                nonDownloadable={true}
                                                handleLoadCounter={() => { }}
                                            />
                                        </div>
                                        <div className="Screen3__Iframe--left mb_m">
                                            <QuestionWithIframe
                                                questionId={265}
                                                width="100%"
                                                height="100%"
                                                nonDownloadable={true}
                                                handleLoadCounter={() => { }}
                                            />
                                        </div>
                                        <div className="Screen3__Iframe--left">
                                            <QuestionWithIframe
                                                questionId={266}
                                                width="100%"
                                                height="100%"
                                                nonDownloadable={true}
                                                handleLoadCounter={() => { }}
                                            />
                                        </div>
                                    </div>
                                    <div className='Screen3__IframeContainer2'>
                                        <div className='mb'>
                                            <IframeHeading greenVariant label='Top District' />
                                            <div className='Screen2__Container3--iframe'>
                                                <QuestionWithIframe
                                                    questionId={267}
                                                    width="100%"
                                                    height="100%"
                                                    handleLoadCounter={() => { }}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <IframeHeading greenVariant label='Bottom District' />
                                            <div className='Screen2__Container3--iframe'>
                                                <QuestionWithIframe
                                                    questionId={268}
                                                    width="100%"
                                                    height="100%"
                                                    handleLoadCounter={() => { }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Screen3__IframeContainer">
                                <IframeHeading greenVariant label='Civil Works' />
                                <div className="Screen3__IframeContainerChild">
                                    <div className='Screen3__IframeContainer2'>
                                        <div className="Screen3__Iframe--left mb_m">
                                            <QuestionWithIframe
                                                questionId={269}
                                                width="100%"
                                                height="100%"
                                                nonDownloadable={true}
                                                handleLoadCounter={() => { }}
                                            />
                                        </div>
                                        <div className="Screen3__Iframe--left mb_m">
                                            <QuestionWithIframe
                                                questionId={270}
                                                width="100%"
                                                height="100%"
                                                nonDownloadable={true}
                                                handleLoadCounter={() => { }}
                                            />
                                        </div>
                                        <div className="Screen3__Iframe--left">
                                            <QuestionWithIframe
                                                questionId={274}
                                                width="100%"
                                                height="100%"
                                                nonDownloadable={true}
                                                handleLoadCounter={() => { }}
                                            />
                                        </div>
                                    </div>
                                    <div className='Screen3__IframeContainer2'>
                                        <div className='mb'>
                                            <IframeHeading greenVariant label='Top District' />
                                            <div className='Screen2__Container3--iframe'>
                                                <QuestionWithIframe
                                                    questionId={271}
                                                    width="100%"
                                                    height="100%"
                                                    handleLoadCounter={() => { }}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <IframeHeading greenVariant label='Bottom District' />
                                            <div className='Screen2__Container3--iframe'>
                                                <QuestionWithIframe
                                                    questionId={272}
                                                    width="100%"
                                                    height="100%"
                                                    handleLoadCounter={() => { }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="Screen3__Container2">
                        <SectionHeader Icon={infrastructure} label='Infrastructure' />
                        <IframeHeading greenVariant label='Smart School Phase-wise Compliance' />
                        <div className="Screen3Iframes">
                            <div className="Screen3Iframes__Container">
                                <div className="Screen3Iframes__Container--iframes mb">
                                    <QuestionWithIframe
                                        questionId={275}
                                        width="100%"
                                        height="100%"
                                        nonDownloadable={true}
                                        handleLoadCounter={() => { }}
                                    />
                                </div>
                                <div className="Screen3Iframes__Container--iframes mb">
                                    <QuestionWithIframe
                                        questionId={276}
                                        width="100%"
                                        height="100%"
                                        nonDownloadable={true}
                                        handleLoadCounter={() => { }}
                                    />
                                </div>
                                <div className="Screen3Iframes__Container--iframes">
                                    <QuestionWithIframe
                                        questionId={277}
                                        width="100%"
                                        height="100%"
                                        nonDownloadable={true}
                                        handleLoadCounter={() => { }}
                                    />
                                </div>
                            </div>
                            <div className="Screen3Iframes__Container">
                                <div>
                                    <IframeHeading greenVariant label='Top District' />
                                    <div className="Screen3Iframes__ContainerBig mb">
                                        <QuestionWithIframe
                                            questionId={278}
                                            width="100%"
                                            height="100%"
                                            handleLoadCounter={() => { }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <IframeHeading greenVariant label='Bottom District' />
                                    <div className="Screen3Iframes__ContainerBig">
                                        <QuestionWithIframe
                                            questionId={279}
                                            width="100%"
                                            height="100%"
                                            handleLoadCounter={() => { }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Screen3