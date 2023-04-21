import React, { useState } from "react";
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
  MenuOutlined,
  AlignLeftOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Home", "", <HomeOutlined />),
  getItem("Dashboard", "dashboard", <AppstoreOutlined />),
  getItem("Settings", "setting", <SettingOutlined />),
  getItem("Profile", "profile", <UserOutlined />),
];
const Siderbar = () => {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const handleClick = (id) => {
    navigation(`/${id}`);
  };
  return (
    <Sider
      width="265px"
      style={{
        overflow: "auto",
        height: "100vh",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "400",
      }}
      collapsible
      collapsed={collapsed}
      trigger={null}
    >
      <div style={{ height: 32, margin: 16, background: "none" }}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ background: "none" }}
        >
          {collapsed ? <AlignLeftOutlined /> : <MenuOutlined />}
        </Button>
        {collapsed ? null : (
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", fontWeight: "bold", fontSize: "26px" }}
          >
            WEB IoT
          </a>
        )}
      </div>
      {token ? (
        <Menu
          onClick={({ keyPath }) => handleClick(keyPath)}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          style={{ background: "none" }}
        />
      ) : null}
    </Sider>
  );
};

export default Siderbar;
