import React from "react";

function UserCard({ user }) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-bold text-indigo-600 shadow-md">
          {user.name.firstname.charAt(0).toUpperCase()}
        </div>

        <h2 className="mt-3 text-xl font-bold capitalize text-white">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="text-sm text-indigo-100">@{user.username}</p>
      </div>

      {/* User Details */}
      <div className="space-y-4 p-6">

        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
            📧
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500">Email</p>
            <p className="text-sm font-semibold text-gray-800">
              {user.email}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
            📞
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500">Phone</p>
            <p className="text-sm font-semibold text-gray-800">
              {user.phone}
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100">
            📍
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500">Address</p>
            <p className="text-sm font-semibold capitalize text-gray-800">
              {user.address.number}, {user.address.street}
            </p>
            <p className="text-xs text-gray-500">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>

        {/* User ID */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-sm text-gray-500">User ID</span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            #{user.id}
          </span>
        </div>

      </div>
    </div>
  );
}

export default UserCard;