import { Button, Menu } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { Link } from "react-router-dom";

function RightMenu() {
  const { lg } = useBreakpoint();
  return (
    <div>
      <Menu mode={lg ? "horizontal" : "inline"}>
        <Menu.Item key="signin">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Button type="primary">
            <Link to="/register">Create Account</Link>
          </Button>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default RightMenu;
