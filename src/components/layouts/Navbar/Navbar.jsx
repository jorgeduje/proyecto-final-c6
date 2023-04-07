import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import Switch from "@mui/material/Switch";
const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleChange = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  return (
    <div>
      <h2>Este es el navbar</h2>

      <Switch
        checked={state.isDark}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />

      <Link to="/favs">Ir a favoritos</Link>

      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
