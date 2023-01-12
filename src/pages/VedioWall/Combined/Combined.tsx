import "./Combined.css"
import CombinedHeader from "../../../components/layouts/CombinedHeader"
import Filters from "../Filters/Filters"
import { Col, Row } from "antd"
import QuestionWithIframe from "../../../components/QuestionWIthIframe"
import { connect } from 'react-redux';
import { FC } from "react"
import CustomMap from "../../../components/CustomMap/CustomMap"
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader';
import studentAttendance from "../../../assets/pjb/SectionHeader/student_attendance.png"
import infrastructure from "../../../assets/pjb/SectionHeader/infrastructure.png"
import midDayMeal from "./../../../assets/pjb/SectionHeader/mid_day_meal.png"
import financeAndCivilWorks from "../../../assets/pjb/SectionHeader/finance_and_civil_works.png"
import CombinedFooter from "../../../components/layouts/CombinedFooter"
import map from "../../../assets/pjb/SectionHeader/map.png"

interface Props {
    date_range: any
    year: any
}
const Combined: FC<Props> = ({ date_range, year }) => {
    return (
        <>
            <CombinedHeader />
            <Filters />
            <Row gutter={2}>
                <Col span={12}>
                    <Row gutter={2}>
                        <Col span={16}>
                            <div className="CombinedIframe">
                                <div className="HeaderContainer__padding">
                                    <SectionHeader Icon={studentAttendance} label="Student Attendance" />
                                </div>
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
                            <div className="CombinedIframe2 CombinedIframe__flex CombinedIframe__flex--fix">
                                <div className='CombinedIframe__header '>
                                    <SectionHeader Icon={map} label="Map View" />
                                </div>
                                <div className='CombinedIframe__map'>
                                    <CustomMap />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <div className="CombinedIframe">
                        <div className="HeaderContainer__padding">
                            <SectionHeader Icon={infrastructure} label="Infrastructure" />
                        </div>


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
                    <div className="HeaderContainer__padding">
                        <SectionHeader Icon={midDayMeal} label="Mid-day Meal" />
                    </div>


                    <div className="CombinedIframe">
                        <QuestionWithIframe
                            questionId={66}
                            height="100%"
                            width="100%"
                            params={{ year, date_range }}
                            type={1}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div className="HeaderContainer__padding">
                        <SectionHeader Icon={financeAndCivilWorks} label="Finance and Civil Works" />
                    </div>

                    <div className="CombinedIframe">
                        <QuestionWithIframe
                            questionId={67}
                            width="100%"
                            height="100%"
                            params={{ year, date_range }}
                            type={1}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </Col>
            </Row>
            {/* <CombinedFooter /> */}
        </>
    )

}


const mapStateToProps = ({ vedio_wall: { year, date_range } }: any) => ({
    year,
    date_range,
})

export default connect(mapStateToProps)(Combined)