import { createContext, useContext, useState } from "react";
import { useFetchVideos } from "./Components/Videos";

const favorite = createContext();
favorite.displayName = "myContext";

// eslint-disable-next-line react/prop-types
export default function FavoriteContext({ children }) {
  const [fav, setFav] = useState([]);

  return (
    <favorite.Provider value={{ fav, setFav }}>{children}</favorite.Provider>
  );
}

function useFavCard() {
  const { fav, setFav } = useContext(favorite);
  const listFavorite = useFetchVideos();
  function addFavorite(id) {
    let newList = [...fav];

    const isFavorite = listFavorite.filter((el) => el.code === id);
    const isRepeated = newList.includes(id);
    if (isFavorite && isRepeated) {
      newList = newList.filter((el) => el !== id);
      return setFav(newList);
    } else {
      newList.push(isFavorite[0].code);
      return setFav(newList);
    }
  }

  return { fav, addFavorite };
}

export { useFavCard };
