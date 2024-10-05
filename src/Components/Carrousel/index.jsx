import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../Components/Card";
import Category from "../Category";
import ListCategories from "../../Components/Category/listCategories";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Carrousel({ listVideos }) {
  return ListCategories().map((el, idx) => (
    <Category key={idx} category={el.category}>
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
            spaceBetween: 0,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 10,
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
        {listVideos.map((video) =>
          video.category == el.category ? (
            <SwiperSlide key={video.id}>
              <Card key={video.id} id={video.code}></Card>
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
