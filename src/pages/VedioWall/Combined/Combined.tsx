import "./Combined.css"
import CombinedHeader from "../../../components/layouts/CombinedHeader"
import Filters from "../Filters/Filters"
import { Col, Row } from "antd"
import QuestionWithIframe from "../../../components/QuestionWIthIframe"
import { connect } from 'react-redux';
import { FC } from "react"


interface Props {
    date_range: any
    year: any
}
const Combined: FC<Props> = ({ date_range, year }) => {
    return (
        <>
            <CombinedHeader />
            <Filters />
            <Row>
                <Col span={12}>
                    <div className="CombinedIframe">
                        <QuestionWithIframe
                            questionId={54}
                            width="100%"
                            height="100%"
                            type={1}
                            params={{ year, date_range }}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div className="CombinedIframe">
                        <QuestionWithIframe
                            questionId={55}
                            width="100%"
                            height="100%"
                            type={1}
                            params={{ year, date_range }}
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <div className="CombinedIframe">
                        <QuestionWithIframe
                            questionId={56}
                            height="100%"
                            width="100%"
                            params={{ year, date_range }}
                            type={1}
                            handleLoadCounter={() => { }}
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div className="CombinedIframe">
                        <QuestionWithIframe
                            questionId={57}
                            width="100%"
                            height="100%"
                            params={{ year, date_range }}
                            type={1}
                            handleLoadCounter={() => { }}
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

export default connect(mapStateToProps)(Combined)