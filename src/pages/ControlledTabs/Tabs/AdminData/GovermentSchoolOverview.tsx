import QuestionWithIframe from "../../../../components/QuestionWIthIframe"
import IframeHeading from "../utils/IframeHeading"
import SectionHeader from "../utils/SectionHeader"

const GovermentSchoolOverview = () => {
    return (
        <>
            <SectionHeader label="" label2="Government Schools - Overview" withHeight={false} />
            <div className="AdminData2 mb">
                <div className="AdminData3__Container1">
                    <div className="AdminData3IframeContainer mb">
                        <div className="AdminData3Iframe Admin3IframeCommon">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                // params={{ ...filters }}
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="AdminData3IframeBig Admin3IframeCommon">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                // params={{ ...filters }}
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>
                    <div className="AdminData3IframeContainer">
                        <div className="AdminData3IframeBig Admin3IframeCommon">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                // params={{ ...filters }}
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="AdminData3Iframe Admin3IframeCommon">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                // params={{ ...filters }}
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            /></div>
                    </div>
                </div>
                <div className="AdminData3__Container2">
                    <div>
                        <IframeHeading label='District-wise Category-wise Number of Schools' />
                    </div>
                    <div className='AdminData3__Iframe'>
                        <QuestionWithIframe
                            handleLoadCounter={() => { }}
                            questionId={30}
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GovermentSchoolOverview