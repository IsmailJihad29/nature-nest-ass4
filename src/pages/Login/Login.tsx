
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setToken, setUser } from "@/redux/features/userSlice";
import { useLoginMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/hooks";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const toastId = toast.loading("Logging in...", { duration: 2000 });
    try {
      const loginInfo = values;
      const res = await login(loginInfo);

      if (res?.data?.success) {
        toast.success(res?.data?.message, { id: toastId });
      }

      dispatch(setUser(res.data.data));
      dispatch(setToken(res.data.token));
      if (res?.data?.success) {
        navigate(-1);
      }
    } catch (err) {
      toast.error("Incorrect email or password. Please try again.", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg transform transition-all">
        <div className="mb-6 text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </div>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              size="large"
              placeholder="Email"
              className="rounded-full px-4 py-2 text-gray-700"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              type="password"
              size="large"
              placeholder="Password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
              className="rounded-full px-4 py-2 text-gray-700"
            />
          </Form.Item>
          <Form.Item>
            <Button
              block
              type="primary"
              size="large"
              htmlType="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold rounded-full shadow-lg transition-all"
            >
              Log in
            </Button>
            <div className="text-center mt-4">
              <span className="text-gray-500">or </span>
              <NavLink
                to="/register"
                className="text-blue-500 hover:underline font-semibold"
              >
                Register now!
              </NavLink>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
