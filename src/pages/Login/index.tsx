import { FC, useState } from "react";
import { Button, Col, Layout, Row, Input, Divider, Spin, notification } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "./login.css";
import { Content } from "antd/es/layout/layout";
import Login_Img from "../../assets/pjb/login/login-bg.jpg";
import Side_Img from "../../assets/image 135.png";
import API_SERVICE from "../../services/api-service";
import { toogleUserSession } from '../../redux/user/actions';
import { connect } from 'react-redux/es/exports';
import { parseStringPromise } from 'xml2js';
import { setLocalStorageItem } from "../../utils";
import ROUTE_CONST from "../../Routing/RouteConstants";

const Login: FC = ({ _toogleUserSession }: any) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handleLogin = async () => {
    setLoader(true);
    try {
      const encryptedUserName = await API_SERVICE.EncryptForMIS(userName)
      const encryptedPassword = await API_SERVICE.EncryptForMIS(password)


      if (encryptedPassword && encryptedUserName) {
        const _encryptedPassword = await parseStringPromise(encryptedPassword.data).then((resolved: any) => resolved?.string?._)
        const _encryptedUserName = await parseStringPromise(encryptedUserName.data).then((resolved: any) => resolved?.string?._)


        const params = new URLSearchParams()
        params.append("password", _encryptedPassword)
        params.append("UserID", _encryptedUserName)

        const res = await API_SERVICE.Login(params)
        if (res) {
          const { Location, Role, UserType, uniqueCode } = await parseStringPromise(res.data).then((resolved: any) => JSON.parse(resolved?.string?._)[0])
          if (uniqueCode) {
            setLocalStorageItem("user", { Location, Role, UserType, uniqueCode })
            notification.success({
              message: "Logged in Successfully",
              placement: "topRight"
            })
            setLoader(false)
            _toogleUserSession()
            window.location.href = ROUTE_CONST.root

          } else {
            notification.error({
              message: "Invalid Username or Password",
              placement: "topRight"
            })
            console.log("in else ")
            setLoader(false)



            if ("serviceWorker" in navigator) {
              navigator.serviceWorker.ready.then((registration) => {
                console.log(`A service worker is active.....: ${registration.active}`);
                window.location.href = ROUTE_CONST.root
              });
            } else {
              console.error("Service workers are not supported.");
            }
            // return <Spin style={{ height: "100rem", width: "500px" }} />;
          }
        }
      }

    } catch (error) {
      // Relative error handling to be added 
      notification.error({
        message: "Invalid Username or Password",
        placement: "topRight"
      })
      console.log("in catch")
      setLoader(false)

    }

  };

  return (
    <Layout className={"layout-wrapper home-wrapper"}>
      <Content style={{ backgroundColor: "#FFFFFF" }}>
        <Row>
          <Col span={14} style={{ height: "90vh" }}>
            <img
              src={Login_Img}
              height="100%"
              alt="login"
              width="100%"
            ></img>
            <img
              src={Side_Img}
              style={{ marginLeft: "-25%" }}
              height="100%"
              alt="login side"
              width="25%"
            ></img>
          </Col>
          <Col span={10}>
            <Row
              className={"middle"}
              style={{
                justifyContent: "center",
                height: "100%",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Col>
                <div className="title">
                  <b>LOGIN</b>
                  <Divider className="divider" type="vertical" />
                  लॉगिन
                </div>
                <div className="form-container">
                  <Input
                    className="input"
                    size="large"
                    placeholder="dhe_office"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    prefix={<UserOutlined className="icon" />}
                  />
                  <Input.Password
                    className="input"
                    placeholder="password"
                    prefix={<LockOutlined className="icon" />}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                  <Button
                    onClick={handleLogin}
                    // onSubmit={handleLogin}
                    className="button"
                    size="large"
                    type="primary"
                    block
                  >
                    Click to Login
                  </Button>
                  {loader && (
                    <div style={{ textAlign: "center" }}>
                      <Spin />
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};


const mapDispatchToProps = (dispatch: any) => ({
  _toogleUserSession: () => dispatch(toogleUserSession())
})


export default connect(null, mapDispatchToProps)(Login);
