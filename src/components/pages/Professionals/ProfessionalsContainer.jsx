import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

const ProfessionalsContainer = () => {
 
  const {state, dispatch} = useContext(GlobalContext)

  useEffect(() => {
    const getProfesionals = axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    getProfesionals
      .then((res) => dispatch({type:"GET_USERS", payload: res.data}))
      .catch((err) => console.log(err));
  }, []);

  console.log(state.users);

  return (
    <div>
      <h2>Aca van los profesionales</h2>
    </div>
  );
};

export default ProfessionalsContainer;
