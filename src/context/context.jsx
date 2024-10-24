import P from "prop-types"
import { createContext, useContext,useState } from "react";
const favorite = createContext();
favorite.displayName = "myContext";
export default function FavoriteContext({ children }) {
  const [fav, setFav] = useState([]);
  return (
    <favorite.Provider value={{ fav, setFav }}>{children}</favorite.Provider>
  );
}
FavoriteContext.propTypes={
  children:P.object
} 
 function useFavCard() {
  const { fav, setFav } = useContext(favorite);
  function addFavorite(id) {
    let newList = [...fav];
    const isRepeated =  newList.includes(id);
    console.log("addFavorite ~ isRepeated:", isRepeated)
    if (isRepeated) {
      newList =  newList.filter((el) => el != id) ;
      return setFav(newList);
    } else {
      newList.push(id);
      return setFav(newList);
    }}
  return { fav, addFavorite };
}
export { useFavCard };
