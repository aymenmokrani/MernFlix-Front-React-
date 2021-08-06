import { Menu } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu() {
  const { lg } = useBreakpoint();
  return (
    <div>
      <Menu mode={lg ? "horizontal" : "inline"}>
        <Menu.Item key="home">
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item key="contact">
          <a href="/">Popular</a>
        </Menu.Item>
        <SubMenu key="blogs" title={<span>Categories</span>}>
          <Menu.Item key="setting1">Horror</Menu.Item>
          <Menu.Item key="setting2">Comedy</Menu.Item>
          <Menu.Item key="setting:3">Action</Menu.Item>
          <Menu.Item key="setting:4">Drama</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default LeftMenu;
