import React from 'react';
import { useAuth } from '../Hooks/authHooks';



function RegisterPage() {
    let  {navigate,register,handleSubmit ,errors, registerForm} = useAuth();
 return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Register to get started
          </p>
        </div>

        {/* Register Form */}
        <form  onSubmit={handleSubmit(registerForm)}
        className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
               {...register("name", { required: "Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name can only contain letters and spaces",
                },
                })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition"
            />
          </div>
 
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              {...register("email", { required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
               })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition"
            />
          </div>
               {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
          {/* Password */}
          <div>


            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
            {...register("password", { required: "Password is required" ,
              pattern:{
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
              }
            })}
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition"
            />
          </div>
      {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )};

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
            <span onClick={()=> navigate('/')}
             className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </div>


      </div>
    </div>
  );
}

export default RegisterPage