/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Button, Drawer, Input } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, { useState } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { md, lg, sm } = useBreakpoint();

  const showDrawer = () => {
    setVisible(true);
  };
  const closeDrawer = () => {
    setVisible(false);
  };
  return (
    <nav className="menuBar" css={styles}>
      <div className="logo">
        <Link to="/">
          <span>mernflix</span>
        </Link>
      </div>
      <div className="menuCon">
        <div className="lefMenu" style={{ display: !lg && "none" }}>
          <LeftMenu />
        </div>
        <div className="searchBox">
          <Input.Search
            allowClear
            enterButton
            placeholder="Search for movies..."
            style={{ width: 300, display: !md && "none" }}
          />
        </div>
        <div className="rightMenu" style={{ display: !lg && "none" }}>
          <RightMenu />
        </div>
        <Button
          className="barsMenu"
          type="primary"
          onClick={showDrawer}
          style={{ display: lg && "none" }}
        >
          <span className="barsBtn">
            <MenuOutlined />
          </span>
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={true}
          visible={visible}
          onClose={closeDrawer}
        >
          <LeftMenu />
          <RightMenu />
          <Input.Search
            allowClear
            enterButton
            placeholder="Search for movies..."
            style={{ width: 200, marginTop: 15, display: md && "none" }}
          />
        </Drawer>
      </div>
    </nav>
  );
}

const styles = css`
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
  border-bottom: solid 1px #e8e8e8;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
  background-color: #fff;
  width: 100%;

  .logo {
    float: left;
    width: 150px;
    display: flex;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
  }
  .menuCon {
    float: left;
    width: calc(100% - 150px);
    display: flex;
    align-items: center;
    > div {
      display: inline-block;
    }
    .searchBox {
      flex: 1 1 auto;
    }
    .ant-menu-item,
    .ant-menu-submenu,
    .ant-input-search {
      padding: 5px 20px;
    }

    .leftMenu {
      float: left;
    }
    .rightMenu {
      float: right;
    }
    .barsMenu {
      float: right;
      height: 32px;
      padding: 6px;
      display: flex;
      align-items: flex-start;
    }
    .barsBtn {
      display: block;
      width: 20px;
      height: 2px;
      background: #1890ff;
      position: relative;
    }
    .barsBtn:after,
    .barsBtn:before {
      content: attr(x);
      width: 20px;
      position: absolute;
      top: -6px;
      left: 0;
      height: 2px;
      background: #1890ff;
    }
    .barsBtn:after {
      top: auto;
      bottom: -6px;
    }
  }
`;

export default Navbar;
