import { Heading, Box, Center } from "@chakra-ui/react";
import Card from "../../Components/Card";
import videos from "../../json/films.json";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const categories = ["Ação", "Comédia", "Terror", "Animação"];

export const filterCategories = () => {
  return categories.map((el, idx) => (
    <Category key={idx} category={el}>
      {videos.map((video) =>
        video.genre == el ? (
          <SwiperSlide>
            <Card key={video.id} id={video.id}></Card>
          </SwiperSlide>
        ) : (
          <></>
        )
      )}
    </Category>
  ));
};

function Category({ children, category }) {
  return (
    <Center
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      w="80%"
    >
      <Heading
        fontFamily={"Poppins"}
        my="1rem"
        color={"white"}
        fontWeight={"400"}
        fontSize={"1.6rem"}
        as="h3"
      >
        {category}
      </Heading>
      <Box
        alignItems="center"
        justifyContent="center"
        display={"flex"}
        flexDirection="row"
        w="85%"
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          loop={true}
          speed={400}
        >
          {children}
        </Swiper>
      </Box>
    </Center>
  );
}
export default Category;
