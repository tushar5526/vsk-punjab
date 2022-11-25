import { FC } from "react";
import { Col, Image, Row } from 'antd';
import "./index.less";
import RightLogo from "../../assets/Profile.svg";
import "./index.css"
import { connect } from 'react-redux/es/exports';
import { toogleUserSession } from "../../redux/user/actions";
import education from "../../assets/pjb/Header/highres/education-logo.png"


interface Props {
    user_in_session?: boolean
    _toogleUserSession?: any,
}
const DashboardHeader: FC<Props> = () => {

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

                    <Col>
                        <Image src={education} height={"40px"} preview={false} />
                    </Col>
                </Col>
            </Row>
        </div >
    );
};



const mapStateToProps = ({ session: { user_in_session } }: any) => ({
    user_in_session
})

const mapDispatchToProps = (dispatch: any) => ({
    _toogleUserSession: () => dispatch(toogleUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
