import { FC } from "react";
import { Button, Col, Image, Row } from "antd";
import "./index.less";
import LeftLogo from "../../assets/pjb/Header/headerleft1.png";
import LeftLogo2 from "../../assets/pjb/Header/headerleft2.png";
import LeftLogo3 from "../../assets/pjb/Header/Azadi_Ka_Amrit_Mahotsav.png";
import RightLogo from "../../assets/Profile.svg";
import { NavLink } from "react-router-dom";
import "./index.css"
import { connect } from "react-redux/es/exports";
import { logout } from "../../redux/user/actions";

const DashboardHeader: FC = ({ user, logout }: any) => {




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
                विद्या समीक्षा केन्द्र
              </Col>
            </Row>
            <Row align={"middle"}>
              <Col
                span={24}
                className="header_text_2"
              >
                समग्र शिक्षा, हिमाचल प्रदेश
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
              {user && (
                <Button
                  className="logout-btn"
                  onClick={logout}
                >
                  <span>Log Out</span>
                </Button>
              )}
            </>
          </div>
        </Col>
      </Row>
    </div>
  );
};
const mapStateToProps = ({ user: { data } }: any) => ({
  user: data,
});

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(logout()),
});




export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
