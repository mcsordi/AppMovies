import P from "prop-types"
import { MdFavorite } from "react-icons/md";
function FavoriteIcon({ onClick }) {
  return (
    <figure className="items-center justify-center bg-blackOpacity  rounded-sm
     w-10 h-12 flex relative bottom-12 hover:bg-black " onClick={(evt) => { return evt.preventDefault(), onClick() }}>
      <MdFavorite className="text-4xl text-white" />
    </figure>
  )
}
FavoriteIcon.propTypes = {
  onClick: P.func
}

export default FavoriteIcon
