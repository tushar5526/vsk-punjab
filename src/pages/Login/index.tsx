import { FC, useState } from "react";
import { Button, Col, Layout, Row, Input, Divider, Spin } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "./login.css";
import { Content } from "antd/es/layout/layout";
import Login_Img from "../../assets/Login_Img.png";
import Side_Img from "../../assets/image 135.png";
import API_SERVICE from "../../services/api-service";
import { useHistory } from 'react-router-dom';
import ROUTE_CONST from "../../Routing/RouteConstants";
import { setLocalStorageItem } from "../../utils";
import { toogleUserSession } from '../../redux/user/actions';
import { connect } from 'react-redux/es/exports';

const Login: FC = ({ _toogleUserSession }: any) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const history = useHistory()

  const handleLogin = async () => {
    setLoader(true);
    const params = {
      // loginId: "chaks",
      // password: "1234abcd",
      loginId: userName,
      password: password,
    };
    const res: any = await API_SERVICE.Login(params);
    if (res) {
      _toogleUserSession()
      const { user, refreshToken, token } = res?.data?.result?.data?.user;
      setLocalStorageItem("user", { user, refreshToken, token })
      setLocalStorageItem("roles", user?.data?.roleData)
      console.log(user, "user")
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          refreshToken,
          token,
        })
      );
    }

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        console.log(`A service worker is active.....: ${registration.active}`);
        history.push(ROUTE_CONST.root);
      });
    } else {
      console.error("Service workers are not supported.");
    }
    return <Spin style={{ height: "100rem", width: "500px" }} />;
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
