import QuestionWithIframe from '../../../../components/QuestionWIthIframe'
import IframeHeading from '../../../ControlledTabs/Tabs/utils/IframeHeading'
import img1 from "../../../../assets/pjb/Screens/4/img1.png"
import img2 from "../../../../assets/pjb/Screens/4/img2.png"
import img3 from "../../../../assets/pjb/Screens/4/img3.png"

const IframeWithImage = () => {
    return (
        <>
            <div className="Section4Child">
                <IframeHeading greenVariant label='Parameter-wise Status' />
                <div className="Screen4IframeContainer">
                    <div className='Screen4IframeContainer__Common Screen4IframeContainer__Common__Width1 mb'>
                        <img src={img1} alt="parameter wise" className='mb' />
                        <div className="Section4ChildCardsContainerIframeType1 Screen4IframeContainer__Common__height1 ">
                            <QuestionWithIframe
                                questionId={256}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>

                    <div className='Screen4IframeContainer__Common Screen4IframeContainer__Common__Width1 mb'>
                        <img src={img2} alt="parameter wise" className='mb' />
                        <div className="Section4ChildCardsContainerIframeType1 Screen4IframeContainer__Common__height1 ">
                            <QuestionWithIframe
                                questionId={257}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>

                    <div className='Screen4IframeContainer__Common Screen4IframeContainer__Common__Width2'>
                        <img src={img3} alt="parameter wise" className='Screen4ThirdImageMarginFix extraTop  mb' />
                        <div className="Section4ChildCardsContainerIframeType2 Screen4IframeContainer__Common__height2 ">
                            <QuestionWithIframe
                                questionId={258}
                                width="100%"
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IframeWithImage