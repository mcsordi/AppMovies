import P from "prop-types"
import Category from "../Category";
import FilmCard from "../FilmCard";

function Carrousel({ response, films }) {

  return response?.map(({ category }, id) =>
    <Category key={id} category={category} >
      <div>
        <FilmCard response={films} category={category} />
      </div>
    </Category >)

}

Carrousel.propTypes = {
  response: P.array
}
export default Carrousel
