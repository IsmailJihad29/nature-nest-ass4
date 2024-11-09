/* eslint-disable @typescript-eslint/no-explicit-any */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2"; // Import SweetAlert2
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

        // SweetAlert2 toast on success
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: res?.data?.message || "Welcome back!",
          toast: true,
          position: "center",
          showConfirmButton: false,
          timer: 3000,
        });
      }

      dispatch(setUser(res.data.data));
      dispatch(setToken(res.data.token));
      if (res?.data?.success) {
        navigate("/");
      }
    } catch (err) {
      toast.error("Incorrect email or password. Please try again.", {
        id: toastId,
        duration: 2000,
      });
      // Optionally show an error toast using SweetAlert2
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Incorrect email or password. Please try again.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen relative"
      style={{
        backgroundImage: "url('https://i.ibb.co/4YTjFp2/Firefly-A-tranquil-landscape-featuring-a-small-vibrant-plant-nursery-nestled-beside-a-serene-lake-a.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Semi-transparent Layer for Dimming Effect */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-sm p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg">
        <div className="mb-6 text-2xl font-semibold text-center text-white font-heading">
          Login
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
              prefix={<UserOutlined className="text-gray-700" />}
              size="large"
              placeholder="Email"
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300 "
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-700" />}
              type="password"
              size="large"
              placeholder="Password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300"
            />
          </Form.Item>
          <Form.Item>
            <button
              type="submit"
              className="primary-btn block w-full mx-auto "
            >
              Log in
            </button>
            <div className="text-center mt-4 text-gray-300 font-text">
              Don't have an account?{" "}
              <NavLink
                to="/register"
                className="text-white hover:underline font-semibold"
              >
                Register
              </NavLink>
            </div>
            <div className="text-center mt-4 text-gray-300 font-text">
              Or Go To{" "}
              <NavLink to="/" className="text-white hover:underline font-semibold">
                Home
              </NavLink>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
