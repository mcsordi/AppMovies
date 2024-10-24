import P from "prop-types"
import Card from "../../Components/Card";
import Category from "../Category";
import {useCategories} from "../../Components/Category/listCategories";

import Slider from "react-slick";

function Carrousel({ listVideos }) {
   const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
    adaptiveHeight: true,
    // slidesToShow: 3,
    slidesToScroll: 1
  };
  console.log("useCategories:", useCategories())
  return useCategories().map((el, idx) => (
    <Category key={idx} category={el.category}>
      <div className="w-[275px] sm:w-[550px] lg:w-[910px] 2xl:w-[1220px]">
      <Slider className="m-2" {...settings}>
          {listVideos.map((video) =>
          video.category == el.category && 
          (<Card key={video.id} id={video.code}></Card>)          
        )}
        </Slider>
        </div>
    </Category>
  ));
}
Carrousel.propTypes={
  listVideos:P.array
}

export default Carrousel;
