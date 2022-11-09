import React, { FC } from "react";
import { Col, Image, Row } from "antd";
import "./index.less";
import LeftLogo from "../../assets/left-logo.png";
import RightLogo from "../../assets/right-logo.png";
import CenterLogo from "../../assets/center-logo.png";
import { NavLink } from "react-router-dom";

const Header: FC = () => (
  <div className="header">
    <Row gutter={10} justify={"space-between"}>
      <Col>
        <NavLink to={"/"}>
          <Image src={LeftLogo} height={"50px"} preview={false} />
        </NavLink>
      </Col>
      <Col>
        <NavLink to={"/"}>
          <Image src={RightLogo} height={"50px"} preview={false} />
        </NavLink>
      </Col>
      <Col>
        <NavLink to={"/"}>
          <Image src={CenterLogo} height={"50px"} preview={false} />
        </NavLink>
      </Col>
    </Row>
  </div>
);

export default Header;
