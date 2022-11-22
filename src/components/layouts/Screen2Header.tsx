import { FC } from "react";
import { Col, Image, Row } from 'antd';
import "./index.less";
import RightLogo from "../../assets/Profile.svg";
import "./index.css"
import { connect } from 'react-redux/es/exports';
import { toogleUserSession } from "../../redux/user/actions";
import circlepjicon from "../../assets/pjb/utils/circlepjicon.svg"

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

                    <div style={{ display: "flex" }} >
                        <Image src={circlepjicon} height={"30px"} preview={false} />
                        <Image src={RightLogo} height={"30px"} preview={false} />
                    </div>
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
