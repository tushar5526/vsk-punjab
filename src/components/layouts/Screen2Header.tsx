import { FC } from "react";
import { Button, Col, Image, Row } from 'antd';
import "./index.less";
import "./index.css"
import { connect } from 'react-redux/es/exports';
import { toogleUserSession } from "../../redux/user/actions";
import education from "../../assets/pjb/Header/highres/education-logo.png"
import ROUTE_CONST from "../../Routing/RouteConstants";
import { useHistory } from "react-router-dom";
import { logout } from "../../utils";


interface Props {
    user_in_session?: boolean
    _toogleUserSession?: any,
}
const DashboardHeader: FC<Props> = ({ user_in_session, _toogleUserSession }) => {
    const history = useHistory()
    const _logout = () => {
        logout()
        history.push(ROUTE_CONST.login)
        _toogleUserSession()
    }
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
                                {user_in_session ? (
                                    <Button
                                        className="logout-btn"
                                        onClick={_logout}
                                    >
                                        <span>Log Out</span>
                                    </Button>
                                ) : (
                                    <Button
                                        className="logout-btn"
                                        onClick={() => {
                                            history.push(ROUTE_CONST.login)
                                        }}
                                    >
                                        <span>Log in</span>
                                    </Button>
                                )}
                            </>
                        </div>
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
