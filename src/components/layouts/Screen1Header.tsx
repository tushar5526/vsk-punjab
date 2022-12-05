import { FC } from "react";
import { Col, Image, Row } from 'antd';
import "./index.less";
import bharatSarkar from "../../assets/pjb/Header/highres/bharat-sarkar.png"
import { NavLink } from 'react-router-dom';
import "./index.css"
import { connect } from 'react-redux/es/exports';
import { toogleUserSession } from "../../redux/user/actions";

interface Props {
    user_in_session?: boolean
    _toogleUserSession?: any,
}
const DashboardHeader: FC<Props> = () => {


    return (
        <div key={+new Date()} className="dashboard-header">
            <Row gutter={10} justify={"space-between"}>
                <Col span={12}>
                    <NavLink to={"/"}>
                        <Row className="image_row" gutter={10}>
                            <Col>
                                <Image src={bharatSarkar} height={"40px"} preview={false} />
                            </Col>
                        </Row>
                    </NavLink>
                </Col>
                <Col span={12}>
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

            </Row>
        </div>
    );
};



const mapStateToProps = ({ session: { user_in_session } }: any) => ({
    user_in_session
})

const mapDispatchToProps = (dispatch: any) => ({
    _toogleUserSession: () => dispatch(toogleUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);