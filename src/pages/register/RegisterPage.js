/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Card,
  notification,
} from "antd";
import { FrownTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { configs } from "../../configs";
import axios from "axios";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegisterPage() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);

    try {
      const response = await axios.post(
        `${configs.SERVER_URI}/api/signup`,
        values
      );
      console.log("received", response);
      notification["success"]({
        description: "Account created successfully!",
      });
    } catch (err) {
      console.log(err.response.data);
      notification["error"]({
        description: `${err.response.data.msg}`,
      });
    }
  };

  return (
    <div css={styles}>
      <Card bordered>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters length",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="name"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
              {
                min: 6,
                message: "Nickname must be at least 6 characters length ",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <Link to="/register">agreement</Link>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            <br />
            {`Already have an accout?  `}
            <Link to="/login">login now!</Link>
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

  .ant-card {
    flex-grow: 1;
    max-width: 500px;
  }
`;

export default RegisterPage;
