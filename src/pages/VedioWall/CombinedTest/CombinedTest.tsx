import { Col, Row } from 'antd';
import QuestionWithIframe from '../../../components/QuestionWIthIframe';
import CustomMap from '../../../components/CustomMap/CustomMap';
import Filters from '../Filters/Filters';
import CombinedHeader from '../../../components/layouts/CombinedHeader';
import { connect } from 'react-redux';
import { FC } from 'react';

interface Props {
    date_range: any
    year: any
}
const CombinedTest: FC<Props> = ({ date_range, year }) => {
    return (
        <>
            <CombinedHeader />
            <Filters />
            <Row gutter={2}>
                <Col span={12}>
                    <Row gutter={2}>
                        <Col span={16}>
                            <div className="CombinedIframe">
                                <QuestionWithIframe
                                    questionId={54}
                                    width="100%"
                                    height="100%"
                                    type={1}
                                    params={{ year, date_range }}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="CombinedIframe">
                                <CustomMap />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <div className="CombinedIframe">
                        <QuestionWithIframe
                            questionId={65}
                            width="100%"
                            height="100%"
                            type={1}
                            params={{ year, date_range }}
                        />
                    </div>
                </Col>
            </Row>
            <Row gutter={2}>
                <Col span={12}>
                    <div className="CombinedIframe">
                        <QuestionWithIframe
                            questionId={66}
                            height="100%"
                            width="100%"
                            params={{ year, date_range }}
                            type={1}
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div className="CombinedIframe">
                        <QuestionWithIframe
                            questionId={67}
                            width="100%"
                            height="100%"
                            params={{ year, date_range }}
                            type={1}
                        />
                    </div>
                </Col>
            </Row>
        </>
    )
}
const mapStateToProps = ({ vedio_wall: { year, date_range } }: any) => ({
    year,
    date_range,
})


export default connect(mapStateToProps)(CombinedTest)