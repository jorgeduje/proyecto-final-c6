import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>Este es el navbar</h2>
      <Outlet />
    </div>
  );
};

export default Navbar;
