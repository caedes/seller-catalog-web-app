import { node } from "prop-types";
import React from "react";

const initialStore = [];

const FavoritesContext = React.createContext(initialStore);

const useContext = () => React.useContext(FavoritesContext);

const Provider = ({ children }) => {
  return (
    <FavoritesContext.Provider value={initialStore}>
      {children}
    </FavoritesContext.Provider>
  );
};

Provider.propTypes = {
  children: node,
};

const CustomFavoritesContext = {
  Provider,
  useContext,
};

export default CustomFavoritesContext;
