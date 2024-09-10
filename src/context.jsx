import { createContext, useContext, useState } from "react";
import film from "./json/films.json";

const favorite = createContext();
favorite.displayName = "myContext";

export default function FavoriteContext({ children }) {
  const [fav, setFav] = useState([]);

  return (
    <favorite.Provider value={{ fav, setFav }}>{children}</favorite.Provider>
  );
}

function useFavCard() {
  const { fav, setFav } = useContext(favorite);

  function addFavorite(id) {
    let newList = [...fav];
    const isFavorite = film.filter((el) => el.id === id);
    const isRepeated = newList.includes(id);

    if (isFavorite && isRepeated) {
      newList = newList.filter((el) => el !== id);
      return setFav(newList);
    } else {
      newList.push(isFavorite[0].id);
      return setFav(newList);
    }
  }
  return { fav, addFavorite };
}

export { useFavCard };
