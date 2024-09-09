import { Box, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Category, { categories } from "../Category";
import videos from "../../json/films.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/scrollbar";

export const filterCategories = () =>
  categories.map((el, idx) => (
    <Category key={idx} category={el}>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        slidesPerView={4}
        loop={true}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: false,
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: -50,
          },
        }}
      >
        {videos.map((img) =>
          el === img.genre ? (
            <SwiperSlide>
              <Card key={img.id} id={img.id} />
            </SwiperSlide>
          ) : (
            <></>
          )
        )}
      </Swiper>
    </Category>
  ));

function Card({ id }) {
  return (
    <Box mx={".3rem"} my={"1rem"}>
      <Link as={ReactRouterLink} to={`/watch/${id}`}>
        <Box
          _hover={{ transform: "scale(1.25)", cursor: "pointer" }}
          transition=".3s ease-in-out all"
          borderRadius="10px"
          w="270px"
          h="150px"
          alt="Trailer Img"
          backgroundImage={`url(https://img.youtube.com/vi/${id}/mqdefault.jpg)`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        ></Box>
      </Link>
    </Box>
  );
}

export default Card;
