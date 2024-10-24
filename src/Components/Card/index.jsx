import P from "prop-types"
import { Link  } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useFavCard } from "../../context/context";

function Card({ id }) {
  const { fav, addFavorite } = useFavCard();
 
  const favIcon = fav.includes(id) ? (
    <StarIcon w={6} h={6} color="yellow" />
  ) : (
    <StarIcon w={6} h={6} color="#fff" />
  );
  return (
    <section className="flex flex-col-reverse p-2">
      <Link
      className="w-[250px] sm:w-[286px] sm:h-[161px]"
          to={`/watch/${id}`}
            >
        <div className="flex hover:scale-110">
        <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
        className="rounded-md"/>
        </div>
      </Link>
      <figure
        className={`cursor-pointer absolute flex items-center justify-center bg-black bg-opacity-60 w-10 h-10 rounded-md hover:bg-opacity-100`}
        onClick={() =>  { return console.log(id),addFavorite(id)}}
      >
        {favIcon}
      </figure>
      </section>
  );
}
Card.propTypes={
  id:P.string
}
export default Card;
