import { Link as ReactRouterLink } from "react-router-dom";
import { Flex, Text, Link } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      position="fixed"
      as="section"
      fontFamily="Poppins"
      align="center"
      justify="space-around"
      backgroundColor="#000"
      h="8vh"
      w="100%"
      color="#fff"
      borderBottom="2px solid #E53E3E"
      zIndex="999999999"
    >
      <Text fontSize="2.5rem" fontWeight="500" color="red.0" as="span">
        <Link as={ReactRouterLink} to="/" _hover={{}}>
          MathewsFlix
        </Link>
      </Text>

      <Flex fontWeight="600" fontSize="1.2rem" gap=".9rem" as="nav">
        <Link _hover={{}} as={ReactRouterLink} to="/">
          Inicio
        </Link>
        <Link _hover={{}} as={ReactRouterLink} to="/favorite">
          Favoritos
        </Link>
        <Link _hover={{}} as={ReactRouterLink} to="/search">
          Pesquisar
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
