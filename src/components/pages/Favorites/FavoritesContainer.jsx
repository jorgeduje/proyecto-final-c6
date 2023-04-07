import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

const FavoritesContainer = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div>
      {state.favs.map((e) => (
        <h1 key={e.id}>{e.name}</h1>
      ))}
    </div>
  );
};

export default FavoritesContainer;
