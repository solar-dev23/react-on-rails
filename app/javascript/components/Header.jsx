import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default () => {
  const location = useLocation();
  const selectedMenu = location.pathname === "/" ? "1" : "2";

  return (
    <Header>
      <div className="logo">Best Seats</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[selectedMenu]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/seats">Seats</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
