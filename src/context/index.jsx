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
  let newFav = [...fav]

  const addFavorite = (id) => {
    const repeatedFilm = newFav.includes(id)
    const filterNoRepeated = newFav.filter((code) => code != id)
    if (repeatedFilm) {
      newFav = filterNoRepeated
      setFav(newFav)
      return
    }
    else {
      newFav.push(id)
      return setFav(newFav)
    }

  }

  return { fav, addFavorite }
}
