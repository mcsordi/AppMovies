import P from "prop-types"

import { MdFavorite } from "react-icons/md";
function FavoriteIcon({ onClick, icon }) {

  return (
    <figure className="items-center justify-center bg-blackOpacity  rounded-sm
     w-12 h-12 flex relative bottom-12 hover:bg-black "
      onClick={(evt) => { return evt.preventDefault(), onClick() }}>
      <MdFavorite className={`text-4xl ${icon}`} />
    </figure>
  )
}
FavoriteIcon.propTypes = {
  onClick: P.func,
  icon: P.string

}

export default FavoriteIcon
