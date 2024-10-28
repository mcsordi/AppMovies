import P from "prop-types"
import { Link } from "react-router-dom"
import FavoriteIcon from "../favoriteIcon"
import { useFavoriteContext } from "../../../context"
function Card({ id }) {
  const { fav, addFavorite } = useFavoriteContext()
  const isFavorite = fav.some((favorite) => favorite == id)
  const icon = !isFavorite ? "text-white" : "text-red-700"

  return (
    <>
      < div className="flex items-center justify-center hover:scale-110 w-[230px] h-[140px] 450:w-[250px]
      sm:w-[270px] sm:h-[150px] mx-2.5 my-2" >
        <Link className={"w-full h-full"} to={`/watch/${id}`} >
          <img className="rounded-md" src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} />
          <FavoriteIcon icon={icon} onClick={() => { return addFavorite(id) }} />
        </Link >
      </div >

    </>
  )
}
Card.propTypes = {
  id: P.string
}
export default Card
