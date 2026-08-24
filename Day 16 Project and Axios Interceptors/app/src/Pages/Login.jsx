import React from "react";

import { useAuthHook } from "../hooks/useAuthHook";

function Login() {
 
     let {register,handleSubmit,errors,loginFormSubmit,navigate}= useAuthHook();
    
     

 
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>

          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Login Form */}
        <form  onSubmit={handleSubmit(loginFormSubmit)}
         className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              {...register('email',{
                required: "email is required!."
              })}
              type="email"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                          outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>


          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
                {...register('password',{
                required: "password is required!.",
                minLength: {
                  value: 6,
                  massage: "Minimum 6 Characters are required"
                }
              })}
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                          outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition"
            />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg 
                       font-semibold hover:bg-blue-700 
                       transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Don't have an account?{" "}
            <span  onClick={()=> navigate('/register')}
            className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
