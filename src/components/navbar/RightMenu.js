import { Button, Menu } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RightMenu() {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const { lg } = useBreakpoint();
  return (
    <div>
      <Menu mode={lg ? "horizontal" : "inline"}>
        {!isAuth && (
          <Menu.Item key="signin">
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}
        {!isAuth && (
          <Menu.Item key="signup">
            <Button type="primary">
              <Link to="/register">Create Account</Link>
            </Button>
          </Menu.Item>
        )}
        {isAuth && (
          <Menu.Item key="logout">
            <Button type="primary">
              <Link to="/">Logout</Link>
            </Button>
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
}

export default RightMenu;
