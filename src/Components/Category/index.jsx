import { Heading, Box, Center } from "@chakra-ui/react";
import Card from "../../Components/Card";
import videos from "../../json/films.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
export const categories = ["Ação", "Comédia", "Terror", "Animação"];

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
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          1310: {
            slidesPerView: 3,
            spaceBetween: false,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: false,
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 0,
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

function Category({ children, category }) {
  return (
    <Center
      flexDirection="column"
      display="flex"
      align="center"
      justify="center"
      w="100%"
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
        w="70%"
      >
        {children}
      </Box>
    </Center>
  );
}
export default Category;
