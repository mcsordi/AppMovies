import { Flex, Center } from "@chakra-ui/react";
import Container from "../../Components/Container ";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Category from "../../Components/Category";
import { useFavCard } from "../../context";
import Card from "../../Components/Card";
import Spinn from "../../Components/Spinner";

function Favorite() {
  const { fav } = useFavCard();
  const favtext =
    fav.length == 1 ? `${fav.length} favorito` : `${fav.length} favoritos`;
  return (
    <>
      <Header />
      <Container>
        <Center w="100%" mt="10vh">
          <Flex w="80%" align={"center"} justifyContent={"center"} wrap="wrap">
            <Category category={favtext} />
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
