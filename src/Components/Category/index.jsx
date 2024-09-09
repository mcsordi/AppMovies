import { Heading, Box, Center, Flex, Container } from "@chakra-ui/react";
export const categories = ["Ação", "Comédia", "Terror", "Animação"];

function Category({ children, category }) {
  return (
    <Box
      flexDirection="row"
      align="center"
      justify="center"
      direction="column"
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
    </Box>
  );
}
export default Category;
