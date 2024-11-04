import P from "prop-types"
import Card from "../Card";
import Slider from "react-slick";

function FilmCard({ category, response }) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    variableWidth: true,
    // adaptiveHeight: true,
    // slidesToShow: 3,
    slidesToScroll: 1
  };

  return <Slider {...settings}>
    {response?.map((film) => film.category == category
      && <Card className="text-white" key={film.id}
        id={film.code} />)}
  </Slider >

}
FilmCard.propTypes = {
  response: P.array,
  category: P.string

}

export default FilmCard
