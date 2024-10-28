import P from "prop-types"
import { useContext, useState } from "react";
import { createContext } from "react";

const Favorite = createContext()
Favorite.displayName = "favoriteContext"

export default function FavoriteContext({ children }) {
  const [fav, setFav] = useState([])

  return < Favorite.Provider value={{ fav, setFav }} >
    {children}
  </Favorite.Provider>
}
FavoriteContext.propTypes = {
  children: P.object
}

export function useFavoriteContext() {
  const { fav, setFav } = useContext(Favorite)
  const newFav = [...fav]

  const addFavorite = (id) => {
    newFav.push(id)
    return setFav(newFav)
  }

  return { fav, addFavorite }
}
