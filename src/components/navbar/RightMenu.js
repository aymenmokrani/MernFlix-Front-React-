/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Button, Menu } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/actions/authActions";

function RightMenu({ logged }) {
  console.log(logged);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const { lg } = useBreakpoint();
  return (
    <div css={styles}>
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
              <Link to="/" onClick={() => dispatch(logOut())}>
                Logout
              </Link>
            </Button>
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
}

const styles = css``;

export default RightMenu;
