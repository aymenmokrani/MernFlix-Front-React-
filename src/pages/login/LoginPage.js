/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React from "react";
import { Form, Input, Button, Checkbox, Card, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { configs } from "../../configs";
import axios from "axios";
import { authenticate, isAuth } from "../../helpers/authToken";
import { logIn } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);

    try {
      const response = await axios.post(
        `${configs.SERVER_URI}/api/login`,
        values
      );
      authenticate(response, () => {
        if (isAuth()) {
          notification["success"]({
            description: "You're logged successfully!",
          });
          setTimeout(() => {
            // setLoggedIn(true); // Redux set auth to true
            dispatch(logIn());
          }, 1500);
        } else {
          console.log("something went wrong, try to log in again");
          notification["error"]({
            description: "something went wrong, try to log in again",
          });
        }
      });
    } catch (err) {
      console.log(err.response.data);
      notification["error"]({
        description: `${err.response.data.error}`,
      });
    }
  };

  return (
    <div css={styles}>
      <Card bordered>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" to="/login">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            {`Or  `}
            <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
const styles = css`
  height: calc(100vh - 57px);
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    max-width: 300px;
  }
  .login-form-forgot {
    float: right;
  }
  .ant-col-rtl .login-form-forgot {
    float: left;
  }
  .login-form-button {
    width: 100%;
    display: block;
  }

  .ant-card {
    // flex-grow: 1;
    max-width: 500px;
  }
`;

export default LoginPage;
