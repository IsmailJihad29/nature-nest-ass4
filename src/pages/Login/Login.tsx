/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2"; // Import SweetAlert2
import { setToken, setUser } from "@/redux/features/userSlice";
import { useLoginMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/hooks";
import loginImg from "../../assets/login.jpg"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e:any) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in...", { duration: 2000 });

    try {
      const loginInfo = { email, password };
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

        dispatch(setUser(res.data.data));
        dispatch(setToken(res.data.token));
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
      background: loginImg,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Semi-transparent Layer for Dimming Effect */}
      <div className="absolute inset-0  opacity-40"></div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-sm p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg">
        <div className="mb-6 text-2xl font-semibold text-center text-white font-heading">
          Login
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-white mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="primary-btn block w-full mx-auto bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
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
        </form>
      </div>
    </div>
  );
};

export default Login;
