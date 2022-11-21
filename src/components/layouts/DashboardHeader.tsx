import { FC } from "react";
import { Button, Col, Image, Row, notification } from 'antd';
import "./index.less";
import LeftLogo from "../../assets/pjb/Header/headerleft1.png";
import LeftLogo2 from "../../assets/pjb/Header/headerleft2.png";
import LeftLogo3 from "../../assets/pjb/Header/Azadi_Ka_Amrit_Mahotsav.png";
import RightLogo from "../../assets/Profile.svg";
import { NavLink, useHistory } from 'react-router-dom';
import "./index.css"
import { logout } from '../../utils';
import ROUTE_CONST from '../../Routing/RouteConstants';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import { toogleUserSession } from "../../redux/user/actions";

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
        <Col span={6}>
          <NavLink to={"/"}>
            <Row className="image_row" gutter={10}>
              <Col>
                <Image src={LeftLogo} height={"40px"} preview={false} />
              </Col>
              <Col>
                <Image src={LeftLogo2} height={"40px"} preview={false} />
              </Col>
              <Col>
                <Image src={LeftLogo3} height={"40px"} preview={false} />
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

        <Col
          span={6}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <>
              <Image src={RightLogo} height={"30px"} preview={false} />
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
