import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../Components/Card";
import Category, { categories } from "../Category";
import videos from "../../json/films.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Carrousel() {
  return categories.map((el, idx) => (
    <Category key={idx} category={el}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween="40"
        slidesPerView={3}
        navigation
        loop={true}
        speed={400}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          390: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            width: 1000,
            slidesPerView: 3,
            spaceBetween: -100,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {videos.map((video) =>
          video.genre == el ? (
            <SwiperSlide>
              <Card key={video.id} id={video.id}></Card>
            </SwiperSlide>
          ) : (
            <></>
          )
        )}
      </Swiper>
    </Category>
  ));
}

export default Carrousel;
