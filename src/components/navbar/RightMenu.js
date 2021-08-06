import { Menu } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";

function RightMenu() {
  const { lg } = useBreakpoint();
  return (
    <div>
      <Menu mode={lg ? "horizontal" : "inline"}>
        <Menu.Item key="signin">
          <a href="/">SignIn</a>
        </Menu.Item>
        <Menu.Item key="signup">
          <a href="/">SignUp</a>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default RightMenu;
