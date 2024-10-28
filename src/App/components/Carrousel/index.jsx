
import { useFetchData } from "../../utils/useFetchData";
import Category from "../Category";
import FilmCard from "../FilmCard";

function Carrousel() {

  const categoriesUrl = `${import.meta.env.VITE_BASE_URL}/categories`
  const { response } = useFetchData(categoriesUrl)

  return response.map((category, id) =>
    <Category key={id} category={category.category} >
      <div>
        <FilmCard category={category.category} />
      </div>
    </Category >)

}

export default Carrousel
