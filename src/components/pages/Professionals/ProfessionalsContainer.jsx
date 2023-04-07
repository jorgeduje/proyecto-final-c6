import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import Professional from "./Professional";

const ProfessionalsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    console.log("Me ejecute");
    const getProfesionals = axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    getProfesionals
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Professional users={state.users} dispatch={dispatch} favs={state.favs} />
    </div>
  );
};

export default ProfessionalsContainer;
