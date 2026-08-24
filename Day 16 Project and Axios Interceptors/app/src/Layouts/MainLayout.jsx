import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

function MainLayout() {
  return (
    <div className="h-screen p-2 flex grid grid-cols-[1fr_6fr] ">
      <Navbar />
      <div className="h-full p-2 overflow-auto">
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
