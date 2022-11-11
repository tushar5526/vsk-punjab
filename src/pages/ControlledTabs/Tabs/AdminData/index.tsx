import { Component } from 'react';
import QuestionWithIframe from '../../../../components/QuestionWIthIframe';
import IframeHeading from '../utils/IframeHeading';
import SectionHeader from '../utils/SectionHeader';
import GovermentSchoolOverview from './GovermentSchoolOverview';

type PropTypes = {
    user: any
};
type StateTypes = {

};


export class AdminData extends Component<PropTypes, StateTypes> {
    render() {
        return (
            <>
                <SectionHeader label="State Overview" label2="Government and Private Schools" />
                <div className='AdminData mb'>
                    <div className='AdminData__IframeContainer'>
                        <QuestionWithIframe
                            questionId={84}
                            width="100%"
                            // params={{ ...filters }}
                            height="100%"
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                    <div className='AdminData__IframeContainer'>
                        <QuestionWithIframe
                            questionId={84}
                            width="100%"
                            // params={{ ...filters }}
                            height="100%"
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                    <div className='AdminData__IframeContainer'>
                        <QuestionWithIframe
                            questionId={84}
                            width="100%"
                            // params={{ ...filters }}
                            height="100%"
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                    <div className='AdminData__IframeContainer'>
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
                <SectionHeader label="School Statistics" label2="Government and Private Schools" />
                <div className='AdminData2 mb'>
                    <div className='AdminData2__Container'>
                        <div>
                            <IframeHeading label='Distribution of Schools by School-Type' />
                        </div>
                        <div className='AdminData2__Iframe'>
                            <QuestionWithIframe
                                handleLoadCounter={() => { }}
                                questionId={30}
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <div className='AdminData2__Container'>
                        <div>
                            <IframeHeading label='District-wise Category-wise Number of Schools' />
                        </div>
                        <div className='AdminData2__Iframe'>
                            <QuestionWithIframe
                                questionId={152}
                                width="100%"
                                height="100%"
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>
                </div>
                <GovermentSchoolOverview />
                <SectionHeader label="" label2="Private Schools - Overview" withHeight={false} />
                <div className='AdminData mb'>
                    <div className='AdminData__IframeContainer'>
                        <QuestionWithIframe
                            questionId={84}
                            width="100%"
                            // params={{ ...filters }}
                            height="100%"
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                    <div className='AdminData__IframeContainer'>
                        <QuestionWithIframe
                            questionId={84}
                            width="100%"
                            // params={{ ...filters }}
                            height="100%"
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                    <div className='AdminData__IframeContainer'>
                        <QuestionWithIframe
                            questionId={84}
                            width="100%"
                            // params={{ ...filters }}
                            height="100%"
                            nonDownloadable={true}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                    <div className='AdminData__IframeContainer'>
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
                <SectionHeader label="Student and Teacher Statistics" label2="" />
                <SectionHeader label="" label2="Student Enrolment" withHeight={false} />
                <div className='AdminData4 mb'>
                    <div className="AdminData4__Container1 AdminData4__Container--common">
                        <div className='mb'>
                            <IframeHeading label='District-wise Student Enrolment' />
                        </div>
                        <div className='AdminData4__IframeLeft'>
                            <QuestionWithIframe
                                questionId={97}
                                // params={{ ...filters }}
                                width="100%"
                                height="100%"
                                handleLoadCounter={() => { }}
                            />
                        </div>
                    </div>
                    <div className="AdminData4__Container2 AdminData4__Container--common">
                        <div className='mb'>
                            <IframeHeading label='Student Distribution by Gender' />
                        </div>
                        <div className="AdminData4_IframeContainerRight">
                            <div className="AdminData4Iframe">
                                <QuestionWithIframe
                                    handleLoadCounter={() => { }}
                                    questionId={30}
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                            <div className="AdminData4Iframe">
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
                    </div>
                </div>

                <SectionHeader label="Teacher Availability" label2="Government Schools Only" />
                <div className='AdminData5 mb'>
                    <div className="AdminData5_Containers mb">
                        <div className="AdminData5_IframeContainer1 AdminData5_IframeContainerCommon">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                // params={{ ...filters }}
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="AdminData5_IframeContainer1 AdminData5_IframeContainerCommon">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                // params={{ ...filters }}
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="AdminData5_IframeContainer1 AdminData5_IframeContainerCommon">
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
                    <div className="AdminData5_Containers">
                        <div className="AdminData5_IframeContainer2 AdminData5_IframeContainerCommon">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                // params={{ ...filters }}
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="AdminData5_IframeContainer2 AdminData5_IframeContainerCommon">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                // params={{ ...filters }}
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="AdminData5_IframeContainer2 AdminData5_IframeContainerCommon">
                            <QuestionWithIframe
                                questionId={84}
                                width="100%"
                                // params={{ ...filters }}
                                height="100%"
                                nonDownloadable={true}
                                handleLoadCounter={() => { }}
                            />
                        </div>
                        <div className="AdminData5_IframeContainer2 AdminData5_IframeContainerCommon">
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
                </div>

                <div className='AdminData6 mb'>
                    <IframeHeading label='Cadre-wise Teacher Vacancy' />
                    <div className="AdminData6__container">
                        <QuestionWithIframe
                            questionId={97}
                            // params={{ ...filters }}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>

                <div className='AdminData6 mb'>
                    <IframeHeading label='District-wise Distribution of Teachers' />
                    <div className="AdminData6__container">
                        <QuestionWithIframe
                            questionId={97}
                            // params={{ ...filters }}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </div>
                <SectionHeader label="Pupil-Teacher Ratio" label2="Government Schools Only" />
                <div className="AdminData7 mb">
                    <div className='AdminData7__ContainerLeft'>
                        <QuestionWithIframe
                            questionId={115}
                            width="100%"
                            height="100%"
                            handleLoadCounter={() => { }}
                        />
                    </div>
                    <div className='AdminData7__ContainerRight'>
                        <div className="AdminData7__IframeContainer--big AdminData7__IframeContainer--common mb">
                            half
                        </div>
                        <div className='AdminData7__IframeContainer--small AdminData7__IframeContainer--common'>
                            half
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AdminData