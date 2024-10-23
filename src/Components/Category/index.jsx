import P from "prop-types"
import { Heading, Box, Center } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const categories = ["Ação", "Comédia", "Terror", "Animação"];

function Category({ children, category }) {
  return (
    <Center
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      w={["90%", "80%"]}
      mt="10px"
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
        w={["100%", "85%"]}
      >
        {children}
      </Box>
    </Center>
  );
}
Category.propTypes={
  category:P.string,
  children:P.shape({
    id:P.number,
    title:P.string,
    category:P.string,
    code:P.string
  })
}
export default Category;
