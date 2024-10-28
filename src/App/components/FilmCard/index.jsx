import P from "prop-types"
import { useFetchData } from "../../utils/useFetchData";
import Card from "../Card";
import Slider from "react-slick";

function FilmCard({ category }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    variableWidth: true,
    // adaptiveHeight: true,
    // slidesToShow: 3,
    slidesToScroll: 1
  };
  const filmsUrl = `${import.meta.env.VITE_BASE_URL}/filmes`
  const { response } = useFetchData(filmsUrl)
  return <Slider {...settings}>
    {response.map((film) => film.category == category
      && <Card className="text-white" key={film.id}
        src={`https://img.youtube.com/vi/${film.code}/mqdefault.jpg`} />)}
  </Slider >

}
FilmCard.propTypes = {
  category: P.string
}

export default FilmCard
