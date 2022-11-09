import { FC } from "react";
import { Button, Col, Image, Row } from "antd";
import "./index.less";
import LeftLogo from "../../assets/pjb/Header/headerleft1.png";
import LeftLogo2 from "../../assets/pjb/Header/headerleft2.png";
import LeftLogo3 from "../../assets/pjb/Header/Azadi_Ka_Amrit_Mahotsav.png";
import RightLogo from "../../assets/Profile.svg";
import { NavLink } from "react-router-dom";
import "./index.css"

const DashboardHeader: FC = () => {

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    window.location.href = "/";
  };

  const pathname = window.location.pathname;
  console.warn(localStorage.getItem("user"), "localStorage");

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
                ਪੜ੍ਹੋ ਪੰਜਾਬ ਏਕੀਕ੍ਰਿਤ ਡੈਸ਼ਬੋਰਡ

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
            {pathname === "/login" ? null : (
              <>
                <Image src={RightLogo} height={"30px"} preview={false} />
                {localStorage.getItem("user") && (
                  <Button
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "2px",
                      height: "28px",
                      fontSize: "12px",
                    }}
                    onClick={handleLogout}
                  >
                    <span>Log Out</span>
                  </Button>
                )}
              </>
            )}
          </div>
        </Col>

        {/* <Col>
        <NavLink to={"/"}>
          <Row gutter={10}>
            <Col>
              <Image src={RightLogo} height={"50px"} preview={false} />
            </Col>
            <Col>
              User Manual
              <br />
              उपयोगकर्ता पुस्तिका
            </Col>
          </Row>
        </NavLink>
      </Col> */}
      </Row>
    </div>
  );
};

export default DashboardHeader;
