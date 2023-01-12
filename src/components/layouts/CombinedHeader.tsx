import { Image, Col, Row } from 'antd';
import bharatSarkar from "../../assets/pjb/Header/highres/bharat-sarkar.png"
import education from "../../assets/pjb/Header/highres/education-logo.png"

const CombinedHeader = () => {
    return (
        <div key={+new Date()} className="dashboard-header">
            <Row gutter={2} justify={"space-between"}>
                <Col span={2}>
                    <Image src={bharatSarkar} height={"54px"} preview={false} />
                </Col>
                <Col span={7}>
                    <div
                        className="header_text_1"
                    >
                        <span>
                            ਪੰਜਾਬ ਵਿਦਿਆ ਸਮੀਕਸ਼ਾ ਕੇਂਦਰ ਏਕੀਕ੍ਰਿਤ ਡੈਸ਼ਬੋਰਡ
                        </span>
                    </div>
                    <div
                        className="header_text_2"
                    >
                        <span>
                            ਸਕੂਲ ਸਿੱਖਿਆ ਵਿਭਾਗ, ਪੰਜਾਬ
                        </span>
                    </div>
                </Col>

                <Col
                    span={1}
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <>
                            <Image src={education} height={"54px"} preview={false} />
                        </>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default CombinedHeader