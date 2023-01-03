import { FC } from "react";
import { Col, Image, Row } from 'antd';
import "./index.less";
import "./index.css"
import education from "../../assets/pjb/Header/highres/education-logo.png"

const Screen2Header: FC = () => {

    return (
        <div key={+new Date()} className="dashboard-header">
            <Row gutter={10} justify={"space-between"}>
                <Col
                    span={24}
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >

                    <Col
                        span={6}
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
                </Col>
            </Row>
        </div >
    );
};






export default Screen2Header;
