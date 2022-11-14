import Header from "../Header/Header";
import IframeHeading from "../../ControlledTabs/Tabs/utils/IframeHeading";
import QuestionWithIframe from "../../../components/QuestionWIthIframe";
import { Select } from "antd";

const Assesment = () => {
    return (
        <>
            <Header />

            <div className="Assesment__Filters">
                <div className="Assesment__FiltersContainer">
                    <Select
                        defaultValue="Class 1"
                    // onChange={(handleChange)}
                    // options={[
                    //     {
                    //         value: 'District',
                    //         label: 'District',
                    //     },
                    // ]}
                    />
                    <Select
                        defaultValue="SA 1"
                    // onChange={(handleChange)}
                    // options={[
                    //     {
                    //         value: 'District',
                    //         label: 'District',
                    //     },
                    // ]}
                    />
                </div>
            </div>
            <div className="MobileAssesment1 mb_m">
                <div className="MobileAssesment1__Container">
                    <IframeHeading label="SA 1" />
                    <div className="MobileAssesment1CardRow">
                        <div className="MobileAssesment1__IframeContainer">
                            <div className="MobileAssesment1__Iframe mb">
                                <QuestionWithIframe
                                    questionId={84}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className="MobileAssesment1__IframeText">
                                State Pass %
                            </div>
                        </div>
                        <div className="MobileAssesment1__IframeContainer">
                            <div className="MobileAssesment1__Iframe mb">
                                <QuestionWithIframe
                                    questionId={84}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className="MobileAssesment1__IframeText">
                                District Pass %
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MobileAssesment1__Container">
                    <IframeHeading label="SA 2" />

                    <div className="MobileAssesment1CardRow">
                        <div className="MobileAssesment1__IframeContainer">
                            <div className="MobileAssesment1__Iframe mb">
                                <QuestionWithIframe
                                    questionId={84}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className="MobileAssesment1__IframeText">
                                State Pass %
                            </div>
                        </div>
                        <div className="MobileAssesment1__IframeContainer">
                            <div className="MobileAssesment1__Iframe mb">
                                <QuestionWithIframe
                                    questionId={84}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className="MobileAssesment1__IframeText">
                                District Pass %
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MobileAssesment2 mb_m">
                <IframeHeading label="Blocks with Highest Pass Percentage" />
                <div className="MobileAssesment2">
                    <div className="MobileAssesment2__IframeContainer">
                        <QuestionWithIframe
                            questionId={152}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
            </div>
            <div className="MobileAssesment2 mb_m">
                <IframeHeading label="Blocks with Lowest Pass Percentage" />
                <div className="MobileAssesment2">
                    <div className="MobileAssesment2__IframeContainer">
                        <QuestionWithIframe
                            questionId={152}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
            </div>

            <div className="MobileAssesment1 mb_m">
                <div className="MobileAssesment1__Container">
                    <IframeHeading label="NIPUN Abhyas" />
                    <div className="MobileAssesment1CardRow">
                        <div className="MobileAssesment1__IframeContainer">
                            <div className="MobileAssesment1__Iframe mb">
                                <QuestionWithIframe
                                    questionId={84}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className="MobileAssesment1__IframeText">
                                Students Practising Once a Month (State)                            </div>
                        </div>
                        <div className="MobileAssesment1__IframeContainer">
                            <div className="MobileAssesment1__Iframe mb">
                                <QuestionWithIframe
                                    questionId={84}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className="MobileAssesment1__IframeText">
                                Students Practising Once a Month (District)                           </div>
                        </div>
                    </div>
                </div>
                <div className="MobileAssesment1__Container">
                    <IframeHeading label="NIPUN Students" />

                    <div className="MobileAssesment1CardRow">
                        <div className="MobileAssesment1__IframeContainer">
                            <div className="MobileAssesment1__Iframe mb">
                                <QuestionWithIframe
                                    questionId={84}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className="MobileAssesment1__IframeText">
                                State
                            </div>
                        </div>
                        <div className="MobileAssesment1__IframeContainer">
                            <div className="MobileAssesment1__Iframe mb">
                                <QuestionWithIframe
                                    questionId={84}
                                    width="100%"
                                    height="100%"
                                    nonDownloadable={true}
                                    handleLoadCounter={() => { }}
                                />
                            </div>
                            <div className="MobileAssesment1__IframeText">
                                District Pass %
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="MobileAssesment1 mb_m">
                <div className="MobileAssesment1__Container">
                    <IframeHeading label="NIPUN Abhyas" />
                    <div className="MobileAssesment3Iframe">
                        <QuestionWithIframe
                            questionId={152}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
                <div className="MobileAssesment1__Container">
                    <IframeHeading label="NIPUN Students" />
                    <div className="MobileAssesment3Iframe">
                        <QuestionWithIframe
                            questionId={152}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
            </div>

            {/* <div className="MobileAssesment1Column mb_m">
                <div className="MobileAssesment1__ContainerColumn mb">
                    <IframeHeading label="NIPUN Abhyas" />
                    <div className="MobileAssesment3Iframe">
                        <QuestionWithIframe
                            questionId={152}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
                <div className="MobileAssesment1__ContainerColumn">
                    <IframeHeading label="NIPUN Students" />
                    <div className="MobileAssesment3Iframe">
                        <QuestionWithIframe
                            questionId={152}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
            </div> */}
            <div className="MobileAssesment1 mb_m">
                <div className="MobileAssesment1__Container">
                    <IframeHeading label="Bottom Blocks" />
                    <div className="MobileAssesment3Iframe">
                        <QuestionWithIframe
                            questionId={152}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
                <div className="MobileAssesment1__Container">
                    <IframeHeading label="Bottom Blocks" />
                    <div className="MobileAssesment3Iframe">
                        <QuestionWithIframe
                            questionId={152}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Assesment