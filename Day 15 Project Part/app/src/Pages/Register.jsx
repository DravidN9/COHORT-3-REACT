import React from "react";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../Context/AuthContext";

function Register() {
  let navigate = useNavigate();

  const { setRegisteredUser, registeredUser } = useContext(Auth);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    console.log(data);
    const updatedUsers = [...registeredUser , data];
    setRegisteredUser(updatedUsers);
    alert("User Registered Successfully...");
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>

          <p className="text-gray-500 mt-2">Register to get started</p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Name */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
              {...register("name", {
                required: "Name is required!.",
              })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                          outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              {...register("email", {
                required: "email is required!.",
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                          outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              {...register("password", {
                required: "password is required!.",
                minLength: {
                  value: 6,
                  message: "Minimum 6 Characters are required",
                },
              })}
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                          outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg
                       font-semibold hover:bg-blue-700
                       transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Login */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
