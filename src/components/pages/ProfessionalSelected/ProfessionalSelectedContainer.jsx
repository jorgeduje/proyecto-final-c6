import React, { useContext, useEffect } from "react";
import ProfessionalSelected from "./ProfessionalSelected";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../../context/GlobalContext";

const ProfessionalSelectedContainer = () => {
  const { dispatch } = useContext(GlobalContext);
  const { id } = useParams();


  useEffect(() => {
    const getUser = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    getUser.then((res) => dispatch({ type: "GET_USER", payload: res.data }));
  }, []);

  return (
    <div>
      <ProfessionalSelected />
    </div>
  );
};

export default ProfessionalSelectedContainer;
