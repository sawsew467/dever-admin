import React from "react";
import { MenuProps } from "antd";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";

export const sidebarMenu: MenuProps["items"] = [
  {
    key: "user-management",
    icon: React.createElement(UserOutlined),
    label: "usersManagement",
  },
  {
    key: "department-management",
    icon: React.createElement(UserOutlined),
    label: "departmentManagement",
  },
];
