import { Image, Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import bharatSarkar from "../../assets/pjb/Header/highres/bharat-sarkar.png"
import education from "../../assets/pjb/Header/highres/education-logo.png"

const CombinedHeader = () => {
    return (
        <div key={+new Date()} className="dashboard-header">
            <Row gutter={2} justify={"space-between"}>
                <Col span={2}>
                    {/* <NavLink to={"/"}> */}
                    <Row className="image_row" gutter={10}>
                        <Col>
                            <Image src={bharatSarkar} height={"40px"} preview={false} />
                        </Col>
                    </Row>
                    {/* </NavLink> */}
                </Col>
                <Col span={7}>
                    <NavLink to={"/"}>
                        <Row align={"middle"}>
                            <Col
                                span={24}
                                className="header_text_1"
                            >
                                ਪੰਜਾਬ ਵਿਦਿਆ ਸਮੀਕਸ਼ਾ ਕੇਂਦਰ ਏਕੀਕ੍ਰਿਤ ਡੈਸ਼ਬੋਰਡ
                            </Col>
                        </Row>
                        <Row align={"middle"}>
                            <Col
                                span={24}
                                className="header_text_2"
                            >
                                ਸਕੂਲ ਸਿੱਖਿਆ ਵਿਭਾਗ, ਪੰਜਾਬ
                            </Col>
                        </Row>
                    </NavLink>
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
                            <Image src={education} height={"40px"} preview={false} />
                        </>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default CombinedHeader