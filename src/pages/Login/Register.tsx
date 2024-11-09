

/* eslint-disable @typescript-eslint/no-explicit-any */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useSignUPMutation } from "@/redux/api/authApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/userSlice";
import Swal from "sweetalert2";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [signUP] = useSignUPMutation();
  const { user } = useAppSelector(selectCurrentUser);
  const [userRole, setUserRole] = useState("user");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFinish = async (values: any) => {
    if (user) {
      setUserRole(user.role);
    }
  
    try {
      const userInfo = { ...values, role: userRole };
      const res = await signUP(userInfo);
  
      if (res.error) {
        if ("data" in res.error) {
          const baseQueryError = res.error as FetchBaseQueryError;
          const errorMessage =
            (baseQueryError.data as { message?: string }).message ||
            "Something went wrong";
          toast.error(errorMessage);
        } else {
          toast.error("An unexpected error occurred");
        }
      } else {
        // Show SweetAlert2 toast on successful registration
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'You have successfully registered!',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          background: '#28a745', // Green color for success
          color: '#fff', // White text color
          iconColor: '#fff', // White icon color
        });
  
        dispatch(logout()); // Optionally log out the user after registration
        navigate("/login"); // Redirect to login page
      }
    } catch (err) {
      toast.error("Something went wrong", { duration: 2000 });
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

      {/* Registration Form */}
      <div className="relative z-10 w-full max-w-sm p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg ">
        <div className="mb-6 text-2xl font-semibold text-center text-white font-heading">
          Register
        </div>
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            name="name"
           
            rules={[{ required: true, message: "Please input your Full Name!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-700" />}
              size="large"
              placeholder="Full Name"
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300"
            />
          </Form.Item>

          <Form.Item
            name="email"
            
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-700" />}
              size="large"
              placeholder="Email"
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300"
            />
          </Form.Item>

          <Form.Item
            name="phone"
           
            rules={[{ required: true, message: "Please input your Phone Number!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-700" />}
              size="large"
              placeholder="Phone Number"
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300"
            />
          </Form.Item>

          <Form.Item
            name="address"
          
            rules={[{ required: true, message: "Please input your Address!" }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Address"
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300"
            />
          </Form.Item>

          <Form.Item
            name="password"
          
            rules={[
              { required: true },
              { min: 8, message: "Password must be at least 8 characters long!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-700" />}
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
              size="large"
              placeholder="Password"
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300"
            />
          </Form.Item>

          <Form.Item
            name="password2"
         
            dependencies={["password"]}
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-700" />}
              visibilityToggle={{
                visible: confirmPasswordVisible,
                onVisibleChange: setConfirmPasswordVisible,
              }}
              size="large"
              placeholder="Confirm Password"
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300"
            />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" size="large" htmlType="submit">
              Sign Up
            </Button>
            <div className="text-center mt-4 text-gray-300 font-text">
              Already have an account?{" "}
              <NavLink to="/login" className="text-white hover:underline font-semibold">
                Login Now!
              </NavLink>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
