import { Flex, Center } from "@chakra-ui/react";
import Container from "../../Components/Container ";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Category from "../../Components/Category";
import { useFavCard } from "../../context";
import Card from "../../Components/Card";
import ScrollTop from "../../Components/ScrollTop";

function Favorite() {
  const { fav } = useFavCard();
  const favtext =
    fav.length == 1 ? `${fav.length} favorito` : `${fav.length} favoritos`;
  return (
    <>
      <Header />
      <Container>
        <ScrollTop />
        <Center flexDir="column" display="flex" w="100%" mt="10vh">
          <Category category={favtext} />
          <Flex w="80%" align={"center"} justify={"center"} wrap="wrap">
            {fav.map((el) => (
              <Card id={el} />
            ))}
          </Flex>
        </Center>
      </Container>
      <Footer />
    </>
  );
}

export default Favorite;
