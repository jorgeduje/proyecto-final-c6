import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  users: [],
  user: {},
  isDark: false,
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const removefav = (id, state) => {
  const newArr = state.favs.filter((fav) => fav.id !== id);
  localStorage.setItem("favs", JSON.stringify(newArr));
  return newArr;
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload };
    case "HANDLE_FAVORITE":
      const isInFavorite = state.favs.some(
        (fav) => fav.id === action.payload.id
      );

      isInFavorite
        ? removefav(action.payload.id, state)
        : localStorage.setItem("favs", JSON.stringify([...state.favs, action.payload]));

      return isInFavorite
        ? { ...state, favs: removefav(action.payload.id, state) }
        : { ...state, favs: [...state.favs, action.payload] };
    case "SWITCH_MODE":
      return { ...state, isDark: !state.isDark };
    default:
      state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
