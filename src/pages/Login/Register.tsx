/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useSignUPMutation } from "@/redux/api/authApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/userSlice";
import Swal from "sweetalert2";
import loginImg from "../../assets/login.jpg"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [signUP] = useSignUPMutation();
  const { user } = useAppSelector(selectCurrentUser);
  const [userRole, setUserRole] = useState("user");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match!");
      return;
    }

    if (user) {
      setUserRole(user.role);
    }

    try {
      const userInfo = { name, email, phone, address, password, role: userRole };
      const res = await signUP(userInfo);

      if (res.error) {
        toast.error("Something went wrong");
      } else {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered!",
          toast: true,
          position: "center",
          showConfirmButton: false,
          timer: 3000,
        });

        dispatch(logout());
        navigate("/login");
      }
    } catch (err) {
      toast.error("Something went wrong", { duration: 2000 });
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen relative"
      style={{
        backgroundImage:loginImg ,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0  opacity-40"></div>

      <div className="relative z-10 w-full max-w-sm p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg">
        <div className="mb-6 text-2xl font-semibold text-center text-white font-heading">
          Register
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300 outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-2">Email</label>
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
            <label htmlFor="phone" className="text-white mb-2">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300 outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="text-white mb-2">Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300 outline-none"
              placeholder="Enter your address"
              required
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-white mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300 outline-none"
              placeholder="Enter your password"
              required
              minLength={8}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password2" className="text-white mb-2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="rounded-xl px-4 py-2 bg-white bg-opacity-30 text-gray-700 placeholder-gray-300 outline-none"
              placeholder="Confirm your password"
              required
              minLength={8}
            />
          </div>
          <button
            type="submit"
            className="primary-btn block w-full mx-auto bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
          <div className="text-center mt-4 text-gray-300 font-text">
            Already have an account?{" "}
            <NavLink to="/login" className="text-white hover:underline font-semibold">
              Login Now!
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
